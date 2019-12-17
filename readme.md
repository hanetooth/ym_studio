## Installation guide for YM Studio

- run "composer install".
- Update Database credentials in .env.
- run "php artisan migrate --seed"
- run "npm install"
- run "npm run dev"

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## TESTING
```
vendor/bin/phpunit
```
## Getting Coupon Codes
```
php artisan get:coupons
```
## Generating coupons
Generate single coupon.
```
php artisan make:coupons
```
Generate n coupon.
```
php artisan make:coupons 3
```
