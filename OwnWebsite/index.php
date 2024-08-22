<?php
include 'db.php';
?>
<!DOCTYPE html>
<html>
<head>
    <title>Task Manager</title>
</head>
<body>
    <h1>Task Manager</h1>

    <form action="add_task.php" method="post">
        <input type="text" name="task" placeholder="Enter a new task" required>
        <button type="submit">Add Task</button>
    </form>

    <h2>Tasks List</h2>
    <ul>
        <?php
        $result = $conn->query("SELECT * FROM tasks");
        while ($row = $result->fetch_assoc()) {
            echo "<li>" . htmlspecialchars($row['task']) . " <a href='delete_task.php?id=" . $row['id'] . "'>Delete</a></li>";
        }
        ?>
    </ul>
</body>
</html>
