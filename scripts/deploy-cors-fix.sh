#!/bin/bash

# CORS Güvenlik Güncellemesi - Otomatik Deploy Script
# Kullanım: ./scripts/deploy-cors-fix.sh

set -e

echo "🔒 CORS Güvenlik Güncellemesi Başlatılıyor..."

# Renk kodları
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Hata yakalama
error_exit() {
    echo -e "${RED}❌ Hata: $1${NC}" >&2
    exit 1
}

success_msg() {
    echo -e "${GREEN}✅ $1${NC}"
}

warning_msg() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

# Gerekli araçları kontrol et
check_requirements() {
    echo "🔍 Gereklilikler kontrol ediliyor..."
    
    if ! command -v supabase &> /dev/null; then
        error_exit "Supabase CLI bulunamadı. Kurulum: npm install -g supabase"
    fi
    
    if ! command -v npm &> /dev/null; then
        error_exit "npm bulunamadı."
    fi
    
    success_msg "Tüm gereklilikler mevcut"
}

# Supabase login kontrolü
check_supabase_auth() {
    echo "🔑 Supabase authentication kontrol ediliyor..."
    
    if ! supabase projects list &> /dev/null; then
        warning_msg "Supabase'e login olmanız gerekiyor"
        echo "Lütfen şu komutu çalıştırın: supabase login"
        exit 1
    fi
    
    success_msg "Supabase authentication OK"
}

# Project link kontrolü
check_project_link() {
    echo "🔗 Proje bağlantısı kontrol ediliyor..."
    
    if [ ! -f ".supabase/config.toml" ]; then
        warning_msg "Proje link edilmemiş"
        echo "Lütfen şu komutu çalıştırın: supabase link --project-ref YOUR_PROJECT_ID"
        exit 1
    fi
    
    success_msg "Proje bağlantısı OK"
}

# Environment variables uyarısı
check_env_vars() {
    echo "🌍 Environment Variables Uyarısı"
    warning_msg "Aşağıdaki environment variables'ları Supabase Dashboard'da ayarladığınızdan emin olun:"
    echo ""
    echo "ALLOWED_ORIGINS=https://storeconversionkit.com,https://www.storeconversionkit.com"
    echo "NODE_ENV=production"
    echo ""
    read -p "Environment variables ayarlandı mı? (y/N): " confirm
    
    if [[ ! $confirm =~ ^[Yy]$ ]]; then
        echo "Lütfen önce environment variables'ları ayarlayın:"
        echo "1. https://supabase.com/dashboard adresine gidin"
        echo "2. Settings > Environment Variables"
        echo "3. Yukarıdaki değişkenleri ekleyin"
        exit 1
    fi
}

# Functions deploy et
deploy_functions() {
    echo "🚀 Functions deploy ediliyor..."
    
    local functions=(
        "validate-session"
        "create-session"
        "set-premium-status"
        "create-portal-link"
        "logout-all-users"
        "test-premium-status"
        "stripe-webhook"
    )
    
    for func in "${functions[@]}"; do
        echo "📦 Deploy ediliyor: $func"
        if supabase functions deploy "$func"; then
            success_msg "$func deploy edildi"
        else
            error_exit "$func deploy edilemedi"
        fi
        sleep 2
    done
}

# Frontend build
build_frontend() {
    echo "🏗️  Frontend build ediliyor..."
    
    if npm run build; then
        success_msg "Frontend build başarılı"
    else
        error_exit "Frontend build başarısız"
    fi
}

# CORS testi
test_cors() {
    echo "🧪 CORS testi yapılıyor..."
    
    # Supabase URL'i al
    local supabase_url=$(grep 'VITE_SUPABASE_URL' .env* 2>/dev/null | head -1 | cut -d'=' -f2 | tr -d '"' || echo "")
    
    if [ -z "$supabase_url" ]; then
        warning_msg "SUPABASE_URL bulunamadı, manuel test gerekli"
        return
    fi
    
    local test_url="${supabase_url}/functions/v1/validate-session"
    
    echo "Test URL: $test_url"
    
    # İzin verilen origin testi
    if curl -s -H "Origin: https://storeconversionkit.com" \
            -H "Access-Control-Request-Method: POST" \
            -X OPTIONS \
            "$test_url" | grep -q "storeconversionkit.com"; then
        success_msg "İzin verilen origin testi geçti"
    else
        warning_msg "İzin verilen origin testi başarısız olabilir"
    fi
    
    # İzin verilmeyen origin testi
    if curl -s -H "Origin: https://malicious-site.com" \
            -H "Access-Control-Request-Method: POST" \
            -X OPTIONS \
            "$test_url" | grep -q "malicious-site.com"; then
        error_exit "İzin verilmeyen origin kabul ediliyor - GÜVENLIK SORUNU!"
    else
        success_msg "İzin verilmeyen origin testi geçti"
    fi
}

# Ana fonksiyon
main() {
    echo "======================================="
    echo "🔒 CORS Güvenlik Güncellemesi"
    echo "======================================="
    
    check_requirements
    check_supabase_auth
    check_project_link
    check_env_vars
    
    echo ""
    echo "🚀 Deploy işlemi başlatılıyor..."
    echo ""
    
    deploy_functions
    build_frontend
    test_cors
    
    echo ""
    echo "======================================="
    success_msg "CORS Güvenlik Güncellemesi Tamamlandı!"
    echo "======================================="
    echo ""
    echo "📋 Sonraki adımlar:"
    echo "1. Production'da test edin"
    echo "2. Login/logout işlevselliğini kontrol edin"
    echo "3. Browser console'da CORS hataları olmadığını doğrulayın"
    echo ""
    echo "❓ Sorun yaşarsanız DEPLOYMENT_GUIDE.md dosyasına bakın"
}

# Script'i çalıştır
main "$@" 