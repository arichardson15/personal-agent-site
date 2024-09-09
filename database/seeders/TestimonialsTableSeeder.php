<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class TestimonialsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {


        \DB::table('testimonials')->delete();

        \DB::table('testimonials')->insert(array (
            0 =>
            array (
                'id' => 1,
                'created_at' => '2024-09-01 15:48:18',
                'updated_at' => '2024-09-01 15:48:18',
                'name' => 'Christian & Holly L.',
                'testimonial' => '5-star experience. Ayden was a joy to work with. She is both knowledgeable and kind. She walked us through a LOT of houses, and never batted an eye. She was prompt and responsive to all of our emails, texts, and questions. She has such a servant heart which is so refreshing. When we are ready for a new place in a couple years, we will definitely be giving her a call. God bless Ayden Mains.',
                'image' => NULL,
            ),
            1 =>
            array (
                'id' => 2,
                'created_at' => '2024-09-01 15:48:26',
                'updated_at' => '2024-09-01 15:48:26',
                'name' => 'Noah W.',
                'testimonial' => 'Ayden is the very best! She is so organized and the best communicator which made the process of buying a house extremely easy. She really makes her clients the priority and gets the job done!',
                'image' => NULL,
            ),
            2 =>
            array (
                'id' => 3,
                'created_at' => '2024-09-01 15:48:49',
                'updated_at' => '2024-09-01 15:48:49',
                'name' => 'J & Danielle W.',
            'testimonial' => 'Our experience with the Heritage Group was above and beyond than what we ever expected. Ayden and Ben were professional throughout the entire process of selling our home and the communication was stellar! We were able to list our home only one month after making the decision to sell/move out of state and we got an offer (which we accepted) within the first weekend of going live! Thank you so much for making this a stress free experience for us! Your team ROCKS!',
                'image' => NULL,
            ),
            3 =>
            array (
                'id' => 4,
                'created_at' => '2024-09-01 15:49:06',
                'updated_at' => '2024-09-01 15:49:06',
                'name' => 'Olivia B.',
            'testimonial' => 'Ayden was such a pleasure to work with! Definitely recommending to my friends :)',
            'image' => NULL,
        ),
        4 =>
        array (
            'id' => 5,
            'created_at' => '2024-09-01 15:49:24',
            'updated_at' => '2024-09-01 15:49:24',
            'name' => 'Devon W.',
            'testimonial' => 'Best realtors hands down. Every time we had a question they were very punctual to answer and always gave us an answer and kept us updated during the whole process!',
            'image' => NULL,
        ),
        5 =>
        array (
            'id' => 6,
            'created_at' => '2024-09-01 15:49:43',
            'updated_at' => '2024-09-01 15:49:43',
            'name' => 'Tyler U.',
            'testimonial' => 'Ayden was fantastic to work with!',
            'image' => NULL,
        ),
        6 =>
        array (
            'id' => 7,
            'created_at' => '2024-09-01 15:49:57',
            'updated_at' => '2024-09-01 15:49:57',
            'name' => 'Scott N.',
            'testimonial' => 'Ayden did a wonderful job! She should be proud of herself as I had told her my past dealings with the realtors have not been good. I was thoroughly impressed.',
            'image' => NULL,
        ),
        7 =>
        array (
            'id' => 8,
            'created_at' => '2024-09-01 15:50:25',
            'updated_at' => '2024-09-01 15:50:25',
            'name' => 'Chad & Jill W.',
        'testimonial' => 'Amazing. Our experience with The Heritage Group at Keller Williams was amazing. In a current market that is turbulent and crazy at best we always felt assured and well informed. No matter how many times you move there are always plenty of questions. They were always quick to respond and give us great information to help us make the best decisions along the way in this process. Although they are young, they are mature and wise beyond their years in this highly competitive field !!! It was encouraging to see young realtors so passionate and knowledgeable about their profession!! I\'d highly recommend these two and KW (we actually already have). We are very happy with our decision to partner with Keller Williams Heritage Group.',
            'image' => NULL,
        ),
    ));
    }
}
