#Preparing serv with tools
FROM php:8.1-apache
COPY --from=composer:2.5 /usr/bin/composer /usr/local/bin/composer
RUN apt-get update && apt-get install -y --no-install-recommends nodejs npm libzip-dev && rm -rf /var/lib/apt/lists/*
RUN docker-php-ext-install zip mysqli pdo_mysql
RUN a2enmod rewrite ssl
#Installing the app
COPY --chmod=777 . /var/www/html
RUN composer install --optimize-autoloader --no-dev && \
    npm install && \
    npm run build && \
    php artisan config:cache && \
    php artisan route:cache && \
    php artisan view:cache && \
    php artisan storage:link
EXPOSE 80