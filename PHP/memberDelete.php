<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if(isset($_POST['email'])) {
        $email = $_POST['email'];

        try {
            $db = new SQLite3('./SQLite3/account/accountHandler.db');
            $stmt = $db->prepare('DELETE FROM account WHERE email=?');
            $stmt->bindValue(1, $email);
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