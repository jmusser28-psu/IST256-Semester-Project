<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        $db = new SQLite3('./SQLite3/account/accountHandler.db');
        $result = $db->query('SELECT * FROM account');

        $members = [];
        while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
            $members[] = $row;
        }
        
        $db->close();

        echo json_encode(['success' => true, 'member' => $members]);
        exit;
    }

    catch(Exception $e) {
        echo json_encode(['success' => false]);
        exit;
    }
}

?>