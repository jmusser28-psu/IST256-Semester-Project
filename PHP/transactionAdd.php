<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if(isset($_POST['email']) && isset($_POST['productID']) && isset($_POST['cost']) && isset($_POST['creditNumber']) 
        && isset($_POST['billingAddress']) && isset($_POST['zip'])) {
        $email = $_POST['email'];
        $productID = $_POST['productID'];
        $cost = $_POST['cost'];
        $creditNumber = $_POST['creditNumber'];
        $billingAddress = $_POST['billingAddress'];
        $zip = $_POST['zip'];


        try {
            $db = new SQLite3('./SQLite3/account/transaction.db');
            $stmt = $db->prepare('INSERT INTO purchase (email, productID, cost, creditNumber, billingAddress, zip) VALUES (?, ?, ?, ?, ?, ?)');
            $stmt->bindValue(1, $email);
            $stmt->bindValue(2, $productID);
            $stmt->bindValue(3, $cost);
            $stmt->bindValue(4, $creditNumber);
            $stmt->bindValue(5, $billingAddress);
            $stmt->bindValue(6, $zip);
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