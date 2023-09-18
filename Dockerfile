#Preparing serv with tools
FROM php:8.1-apache
COPY --from=composer:2.5 /usr/bin/composer /usr/local/bin/composer
RUN apt-get update && apt-get install -y nodejs npm libzip-dev && docker-php-ext-install zip mysqli pdo_mysql
RUN a2enmod rewrite
RUN a2enmod ssl
RUN service apache2 restart
#Installing the app
COPY . /var/www/html
RUN chmod -R 777 /var/www/html/storage
RUN composer install --optimize-autoloader --no-dev
RUN npm install
RUN npm run build
RUN php artisan config:cache
RUN php artisan route:cache
RUN php artisan view:cache
RUN php artisan storage:link
EXPOSE 80