<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if(isset($_POST['like']) && isset($_POST['dislike']) && isset($_POST['id'])) {
        $like = $_POST['like'];
        $dislike = $_POST['dislike'];
        $id = $_POST['id'];

        try {
            $db = new SQLite3('./SQLite3/article/article.db');
            $stmt = $db->prepare('UPDATE article SET likes=?, dislikes=? WHERE id=?');
            $stmt->bindValue(1, $like);
            $stmt->bindValue(2, $dislike);
            $stmt->bindValue(3, $id);
            $stmt->execute();
            $db->close();
            echo json_encode(['success' => true]);
            exit;
        }
        catch(Exception $e) {
            echo json_encode(['success' => false]);
            exit;
        }
    }
    else {
        echo json_encode(['success' => false]);
        exit;
    }
}

?>