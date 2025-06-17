# Store Conversion Kit

## CORS Güvenlik Konfigürasyonu

### Environment Variables

Supabase Dashboard'da aşağıdaki environment variables'ları ekleyin:

```bash
# Production Environment
ALLOWED_ORIGINS=https://storeconversionkit.com,https://www.storeconversionkit.com
NODE_ENV=production

# Development Environment
ALLOWED_ORIGINS=https://storeconversionkit.com,https://www.storeconversionkit.com,http://localhost:3000,http://localhost:5173,http://localhost:5174
NODE_ENV=development
```

### CORS Güvenlik Özellikleri

1. **Origin Validation**: Sadece izin verilen domainlerden gelen istekler kabul edilir
2. **Credentials Support**: Güvenli cookie ve authentication header desteği
3. **Method Restriction**: Sadece gerekli HTTP methodlarına izin
4. **Header Validation**: Güvenli header'lar whitelist'e alınmış
5. **Error Handling**: CORS hatalarında güvenli hata mesajları

### Güvenlik Kontrolleri

- ✅ Origin-based access control
- ✅ Preflight request handling
- ✅ Secure error responses
- ✅ Development/Production environment separation
- ✅ Client-side CORS error handling

### Test Etme

```bash
# Allowed origin test
curl -H "Origin: https://storeconversionkit.com" \
     -H "Access-Control-Request-Method: POST" \
     -H "Access-Control-Request-Headers: content-type" \
     -X OPTIONS \
     https://your-project.supabase.co/functions/v1/validate-session

# Disallowed origin test (should fail)
curl -H "Origin: https://malicious-site.com" \
     -H "Access-Control-Request-Method: POST" \
     -X OPTIONS \
     https://your-project.supabase.co/functions/v1/validate-session
```

## Installation

... (existing content) 