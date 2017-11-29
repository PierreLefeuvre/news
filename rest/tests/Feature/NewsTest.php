<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Support\Facades\DB;

class NewsTest extends TestCase
{
    private $header;

    function __construct($name = null, array $data = [], $dataName = '')
    {
        parent::__construct($name, $data, $dataName);

        $user = "lefpierre@hotmail.fr";
        $password = "lestilo14";

        $this->header = [
            'Authorization' => 'Basic ' . base64_encode($user . ':' . $password)
        ];
    }
    public function testShowNoAuthentification()
    {
        $response = $this->json('GET','/api/news');
        $this->assertEquals(401, $response->status());
    }
    /**
     * @return int $news_id
     */
    public function testStore()
    {
        $title = 'Test Unitaire';
        DB::table('news')->where(['title'=> $title])->delete();

        $content = ['title' => $title, 'content' => 'aeaeaze'];

        $response = $this->json('POST','/api/news', $content, $this->header);
        $data = json_decode($response->content());

        $this->assertEquals(200, $response->status());

        $this->assertEquals($data->success, true);
        $this->assertNotEmpty($data->news_id);

        return $data->news_id;
    }

    /**
     * @depends testStore
     * @param int $news_id
     */
    public function testUpdate($news_id)
    {
        $content = ['content' => 'update content'];

        $response = $this->json('PATCH', '/api/news/'.$news_id, $content, $this->header);
        $this->assertEquals(200, $response->status());

        $result = DB::table('news')->where(['id' => $news_id])->first();

        $this->assertEquals($content['content'],  $result->content);

    }

    /**
     * @depends testStore
     * @param int $news_id
     */
    public function testShow($news_id)
    {
        $response = $this->json('GET', '/api/news/'.$news_id, [], $this->header);
        $data = json_decode($response->content());

        $this->assertEquals(200, $response->status());

        $this->assertEquals($news_id, $data->id);
    }

    /**
     * @depends testStore
     * @param $news_id
     */
    public function testDestroy($news_id)
    {
        $response = $this->json('DELETE', '/api/news/'.$news_id, [], $this->header);
        $data = json_decode($response->content());

        $this->assertEquals(200, $response->status());
    }
}
