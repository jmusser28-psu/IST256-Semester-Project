<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if(isset($_POST['email']) && isset($_POST['name']) && isset($_POST['phone']) && isset($_POST['age']) && isset($_POST['address']) && isset($_POST['password'])) {
        $email = $_POST['email'];
        $name = $_POST['name'];
        $phone = $_POST['phone'];
        $age = $_POST['age'];
        $address = $_POST['address'];
        $password = $_POST['password'];

        try {
            $db = new SQLite3('./SQLite3/account/accountHandler.db');
            $stmt = $db->prepare('INSERT INTO account (email, name, phone, age, address, password) VALUES (?, ?, ?, ?, ?, ?)');
            $stmt->bindValue(1, $email);
            $stmt->bindValue(2, $name);
            $stmt->bindValue(3, $phone);
            $stmt->bindValue(4, $age);
            $stmt->bindValue(5, $address);
            $stmt->bindValue(6, $password);
            $stmt->execute();
            $db->close();
            echo true;
        }
        catch(e) {
            echo false;
        }
    }
    else {
        echo false;
    }
}

?>