<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if(isset($_POST['oldEmail']) && isset($_POST['email']) && isset($_POST['name']) && isset($_POST['phone']) && isset($_POST['age']) && isset($_POST['address']) && isset($_POST['password'])) {
        $oldEmail = $_POST['oldEmail'];
        $email = $_POST['email'];
        $name = $_POST['name'];
        $phone = $_POST['phone'];
        $age = $_POST['age'];
        $address = $_POST['address'];
        $password = $_POST['password'];

        try {
            $db = new SQLite3('./SQLite3/account/accountHandler.db');
            $stmt = $db->prepare('UPDATE account SET email=?, name=?, phone=?, age=?, address=?, password=? WHERE email=?');
            $stmt->bindValue(1, $email);
            $stmt->bindValue(2, $name);
            $stmt->bindValue(3, $phone);
            $stmt->bindValue(4, $age);
            $stmt->bindValue(5, $address);
            $stmt->bindValue(6, $password);
            $stmt->bindValue(7, $oldEmail);
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