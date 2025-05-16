<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Posts extends Model
{
    public function posts(){
        return view('posts.index');
    }
}
