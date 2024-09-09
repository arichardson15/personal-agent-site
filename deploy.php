<?php
namespace Deployer;

require 'recipe/laravel.php';

// Config

set('repository', 'git@github.com:arichardson15/personal-agent-site.git');

add('shared_files', []);
add('shared_dirs', []);
add('writable_dirs', []);

// React
task('npm:install', function () {
    run('cd {{release_path}} && npm install');
});
task('npm:build', function () {
    run('cd {{release_path}} && npm run build');
});
after('deploy:update_code', 'npm:install');
after('npm:install', 'npm:build');

// Composer Install
task('composer:install', function () {
    run('cd {{release_path}} && composer install');
});
after('artisan:migrate', 'composer:install');
// Hosts

host('173.22.163.66')
    ->set('remote_user', 'mark')
    ->set('deploy_path', '/var/www/www.heritagegroupmn')
    ->set('blanch', 'main');

// Hooks

after('deploy:failed', 'deploy:unlock');
