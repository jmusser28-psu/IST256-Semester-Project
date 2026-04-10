<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if(isset($_POST['email']) && isset($_POST['productID'])) {
        $email = $_POST['email'];
        $productID = $_POST['productID'];

        try {
            $db = new SQLite3('./SQLite3/account/transaction.db');
            $stmt = $db->prepare('DELETE FROM purchase WHERE email=? AND productID=?');
            $stmt->bindValue(1, $email);
            $stmt->bindValue(2, $productID);
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