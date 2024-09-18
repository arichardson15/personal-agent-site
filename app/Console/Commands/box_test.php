<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class box_test extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:box_test';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Test how boxes can fit into a larger box';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        // The dimensions of the large package box
        $packageBox = '5x4x4';
        list($packageLength, $packageWidth, $packageHeight) = array_map('intval', explode('x', $packageBox)); // Cast to int

        // The smaller boxes
        $boxes = ['7x2x3', '4x4x2', '2x2x2'];

        // Initialize the 3D grid for the large box, filled with zeros (untaken slots)
        $grid = array_fill(0, $packageLength, array_fill(0, $packageWidth, array_fill(0, $packageHeight, 0)));

        // Function to try to place a box in the grid and return the box position
        function placeBoxInGrid(&$grid, $box, $packageLength, $packageWidth, $packageHeight)
        {
            list($length, $width, $height) = array_map('intval', explode('x', $box)); // Cast to int

            // Try to place the box in the grid (without rotation)
            for ($l = 0; $l <= $packageLength - $length; $l++) {
                for ($w = 0; $w <= $packageWidth - $width; $w++) {
                    for ($h = 0; $h <= $packageHeight - $height; $h++) {

                        // Check if there's enough empty space for the box at this position
                        $fits = true;
                        for ($x = 0; $x < $length; $x++) {
                            for ($y = 0; $y < $width; $y++) {
                                for ($z = 0; $z < $height; $z++) {
                                    if ($grid[$l + $x][$w + $y][$h + $z] == 1) {
                                        $fits = false; // Slot is already taken
                                        break 3; // Exit the loop if the box cannot fit
                                    }
                                }
                            }
                        }

                        // If the box fits, mark the grid as taken and return the starting position
                        if ($fits) {
                            for ($x = 0; $x < $length; $x++) {
                                for ($y = 0; $y < $width; $y++) {
                                    for ($z = 0; $z < $height; $z++) {
                                        $grid[$l + $x][$w + $y][$h + $z] = 1; // Mark as taken
                                    }
                                }
                            }
                            return ['start' => [$l, $w, $h], 'dimensions' => [$length, $width, $height]]; // Return start position and dimensions
                        }
                    }
                }
            }

            return false; // Box cannot be placed
        }

        // Track the placed boxes and their positions
        $placedBoxes = [];

        // Attempt to place each smaller box in the grid
        foreach ($boxes as $box) {
            $position = placeBoxInGrid($grid, $box, $packageLength, $packageWidth, $packageHeight);
            if ($position) {
                $placedBoxes[] = ['box' => $box, 'position' => $position];
            } else {
                echo "Box $box cannot be placed in the package.\n";
            }
        }

        // Function to print the 3D grid (visualize it as layers of 2D grids)
        function printGrid($grid)
        {
            foreach ($grid as $l => $layer) {
                echo "Layer $l:\n";
                foreach ($layer as $row) {
                    foreach ($row as $slot) {
                        echo $slot ? '[X]' : '[ ]'; // [X] for taken, [ ] for untaken
                    }
                    echo "\n";
                }
                echo "\n";
            }
        }

        // Function to print the box positions
        function printBoxPositions($placedBoxes)
        {
            foreach ($placedBoxes as $boxInfo) {
                $box = $boxInfo['box'];
                $start = $boxInfo['position']['start'];
                $dimensions = $boxInfo['position']['dimensions'];
                echo "Box $box placed at position (L: {$start[0]}, W: {$start[1]}, H: {$start[2]}) with dimensions (L: {$dimensions[0]}, W: {$dimensions[1]}, H: {$dimensions[2]})\n";
            }
        }

        // Print the final grid showing which slots are taken and untaken
        printGrid($grid);

        // Print the positions where each box was placed
        printBoxPositions($placedBoxes);
    }
}
