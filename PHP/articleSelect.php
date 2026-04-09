<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        $db = new SQLite3('./SQLite3/article/article.db');
        $result = $db->query('SELECT id, likes, dislikes FROM article');

        $articles = [];
        while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
            $articles[] = $row;
        }
        
        $db->close();

        echo json_encode(['success' => true, 'article' => $articles]);
        exit;
    }

    catch(Exception $e) {
        echo json_encode(['success' => false]);
        exit;
    }
}

?>