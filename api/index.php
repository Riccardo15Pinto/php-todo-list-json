<?php


$database_path = __DIR__ . '../data/tasks.json';

$json_data = file_get_contents($database_path);

$tasks = json_decode($json_data, true);
