<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if(isset($_POST['email']) && isset($_POST['productID']) && isset($_POST['cost'])) {
        $email = $_POST['email'];
        $productID = $_POST['productID'];
        $cost = $_POST['cost'];

        try {
            $db = new SQLite3('./SQLite3/account/accountHandler.db');
            $stmt = $db->prepare('INSERT INTO account (email, productID, cost) VALUES (?, ?, ?)');
            $stmt->bindValue(1, $email);
            $stmt->bindValue(2, $productID);
            $stmt->bindValue(3, $cost);
            $stmt->bindValue(4, $age);
            $stmt->bindValue(5, $address);
            $stmt->bindValue(6, $password);
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