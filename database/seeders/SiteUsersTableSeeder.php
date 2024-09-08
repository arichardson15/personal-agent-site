<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class SiteUsersTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('site_users')->delete();
        
        \DB::table('site_users')->insert(array (
            0 => 
            array (
                'id' => 1,
                'first_name' => 'asdf',
                'last_name' => 'asdf',
                'email' => 'allen.richardson@hotmail.com',
                'phone_number' => '6513731412',
                'password' => '$2y$12$CY2.WOQyBcisko/yma1CeeQbMxgCauq63JBswyGT9A/GDGjTAjBei',
                'role' => 'admin',
                'created_at' => '2024-08-21 21:12:36',
                'updated_at' => '2024-08-26 01:34:49',
            ),
            1 => 
            array (
                'id' => 2,
                'first_name' => 'asdf',
                'last_name' => 'asdf',
                'email' => 'a@b.com',
                'phone_number' => '123',
                'password' => '$2y$12$C.o/rndSVYQneQARnSv.Hu57KxA9DhWQcgiiF55JP.hWfF3mIzVdO',
                'role' => 'user',
                'created_at' => '2024-08-21 21:20:03',
                'updated_at' => '2024-08-21 21:20:03',
            ),
            2 => 
            array (
                'id' => 3,
                'first_name' => 'allen',
                'last_name' => 'richardson',
                'email' => 'allen@allen.com',
                'phone_number' => '7894564123',
                'password' => '$2y$12$xSDBpbCXEKuNhxWiHLDwE.3x7wKb45dNhsKGzTbylP79EUBntwQqW',
                'role' => 'user',
                'created_at' => '2024-08-21 22:10:10',
                'updated_at' => '2024-08-21 22:10:10',
            ),
        ));
        
        
    }
}