# CORS Güvenlik Güncellemesi - Deployment Rehberi

## 🎯 **Adım Adım Uygulama**

### 1. Environment Variables Ayarlama

#### Supabase Dashboard'da:
1. Supabase projenize girin: https://supabase.com/dashboard
2. Sol menüden **Settings** > **Environment Variables** seçin
3. Aşağıdaki değişkenleri ekleyin:

```bash
# Production için
ALLOWED_ORIGINS=https://storeconversionkit.com,https://www.storeconversionkit.com
NODE_ENV=production

# Development test için (gerekirse)
ALLOWED_ORIGINS=https://storeconversionkit.com,https://www.storeconversionkit.com,http://localhost:3000,http://localhost:5173
NODE_ENV=development
```

### 2. Supabase Functions Deploy Etme

Terminal'de proje klasörünüzde:

```bash
# Supabase CLI kurulu değilse
npm install -g supabase

# Login olun
supabase login

# Projenizi link edin (ilk kez ise)
supabase link --project-ref YOUR_PROJECT_ID

# Functions'ları deploy edin
supabase functions deploy validate-session
supabase functions deploy create-session  
supabase functions deploy set-premium-status
supabase functions deploy create-portal-link
supabase functions deploy logout-all-users
supabase functions deploy test-premium-status
supabase functions deploy stripe-webhook
```

### 3. Test Etme

#### Browser Developer Tools ile:
```javascript
// Console'da test edin
fetch('https://YOUR_PROJECT.supabase.co/functions/v1/validate-session', {
  method: 'OPTIONS',
  headers: {
    'Origin': 'https://storeconversionkit.com',
    'Access-Control-Request-Method': 'POST'
  }
}).then(r => console.log('Headers:', [...r.headers.entries()]))
```

#### CURL ile test:
```bash
# İzin verilen origin
curl -v -H "Origin: https://storeconversionkit.com" \
     -H "Access-Control-Request-Method: POST" \
     -X OPTIONS \
     https://YOUR_PROJECT.supabase.co/functions/v1/validate-session

# İzin verilmeyen origin (hata vermeli)
curl -v -H "Origin: https://malicious-site.com" \
     -H "Access-Control-Request-Method: POST" \
     -X OPTIONS \
     https://YOUR_PROJECT.supabase.co/functions/v1/validate-session
```

### 4. Frontend Build ve Deploy

```bash
# Dependencies yükleyin
npm install

# Build alın
npm run build

# Deploy edin (Vercel/Netlify/vs)
# Vercel için: vercel --prod
# Netlify için: netlify deploy --prod
```

### 5. Doğrulama Checklist

- [ ] Environment variables eklendi
- [ ] Tüm functions deploy edildi
- [ ] CORS test'leri geçti
- [ ] Frontend build başarılı
- [ ] Production'da test edildi
- [ ] Login/logout çalışıyor
- [ ] Session validation çalışıyor

## 🐛 **Sorun Giderme**

### Hata: "Function not found"
```bash
# Functions listesini kontrol edin
supabase functions list

# Tekrar deploy edin
supabase functions deploy FUNCTION_NAME
```

### Hata: "CORS still allowing all origins"
```bash
# Environment variables'ı kontrol edin
supabase projects list
supabase dashboard

# Supabase Dashboard'da Environment Variables bölümünü kontrol edin
```

### Hata: "Build failed"
```bash
# Dependencies'leri temizleyin
rm -rf node_modules package-lock.json
npm install

# TypeScript hatalarını kontrol edin
npm run lint
```

## 📞 **Yardım Gerekirse**

1. Hata mesajının tam metnini paylaşın
2. Hangi adımda takıldığınızı belirtin
3. Browser console log'larını paylaşın
4. Network tab'daki request/response'ları gösterin

## 🔄 **Rollback (Geri Alma)**

Eğer sorun yaşarsanız:

```bash
# Eski function'ları geri yükleyin
git checkout HEAD~1 supabase/functions/
supabase functions deploy validate-session
# ... diğer functions
``` 