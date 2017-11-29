<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    public function getTitleAttribute($value)
    {
        return ucfirst(mb_strtolower($value));
    }

    public function getContentAttribute($value)
    {
        return str_replace("\n", '<br>', $value);
    }

}
