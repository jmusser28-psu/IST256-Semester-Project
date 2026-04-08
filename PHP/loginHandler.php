<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        $db = new SQLite3('./SQLite3/account/accountHandler.db');

        $stmt = $db->prepare('SELECT email, password FROM account WHERE email = ?');
        $stmt->bindValue(1, $_POST['email']);
        
        $result = $stmt->execute();

        $row = $result->fetchArray(SQLITE3_ASSOC);

        $db->close();

        if ($row && $row['password'] === $_POST['password']) {
            echo json_encode(['success' => true, 'member' => $row]);
        }
        else {
            echo json_encode(['success' => false]);
        }
    }

    catch(Exception $e) {
        echo json_encode(['success' => false]);
        exit;
    }
}

?>