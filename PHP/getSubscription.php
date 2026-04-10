<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        $db = new SQLite3('./SQLite3/account/transaction.db');
        $stmt = $db->prepare('SELECT email FROM purchase WHERE email=? AND productID=0');
        $stmt->bindValue(1, $_POST['email']);
        $result = $stmt->execute();

        $members = [];
        while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
            $members[] = $row;
        }

        $db->close();

        if (count($members) >= 1) {
             echo json_encode(['success' => true]);
             exit;
        }
        else {
            echo json_encode(['success' => false]);
            exit;
        }
    }

    catch(Exception $e) {
        echo json_encode(['success' => false]);
        exit;
    }
}

?>