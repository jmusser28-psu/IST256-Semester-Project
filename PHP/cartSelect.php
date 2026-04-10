<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        $db = new SQLite3('./SQLite3/account/shoppingcartHandler.db');
        $stmt = $db->prepare('SELECT productID, cost FROM cart WHERE email=?');
        $stmt->bindValue(1, $_POST['email']);
        $result = $stmt->execute();

        $products = [];
        while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
            $products[] = $row;
        }
        
        $db->close();

        echo json_encode(['success' => true, 'product' => $products]);
        exit;
    }

    catch(Exception $e) {
        echo json_encode(['success' => false]);
        exit;
    }
}

?>