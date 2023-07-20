<?php

$database_path = __DIR__ . '/../data/tasks.json';

$json_data = file_get_contents($database_path);

$tasks = json_decode($json_data, true);

function get_new_id($tasks)
{
    $highest_value = 0;
    foreach ($tasks as $task) {
        if ($task["id"] > $highest_value) $highest_value = $task["id"];
    }
    return $highest_value + 1;
}


$new_element = $_POST['skill'] ?? null;

if ($new_element) {

    $tasks[] = ["name" => $new_element, "id" => get_new_id($tasks), "isUse" => false];

    $json_data = json_encode($tasks);
    file_put_contents($database_path, $json_data);
}

header('Content-Type: application/json');
echo $json_data;
