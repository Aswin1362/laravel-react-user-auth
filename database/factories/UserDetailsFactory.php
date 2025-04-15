<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\UserDetails>
 */
class UserDetailsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'address' => $this->faker->address(),
            'dob' => $this->faker->date('Y-m-d', '2005-01-01'),
            'phone' => $this->faker->phoneNumber(),
            'gender' => $this->faker->randomElement(['male', 'female', 'other']),
        ];
    }
}
