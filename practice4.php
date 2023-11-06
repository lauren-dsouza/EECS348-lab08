<html>
    <body>
        <?php 
            $size = intval($_POST["size"]);

            echo "<table border='1'>";
            // Header row
            echo "<tr><th></th>";
            for ($i = 1; $i <= $size; $i++) {
                echo "<th>$i</th>";
            }
            echo "</tr>";
        
            // Data rows
            for ($i = 1; $i <= $size; $i++) {
                echo "<tr><th>$i</th>";
                for ($j = 1; $j <= $size; $j++) {
                    echo "<td>" . ($i * $j) . "</td>";
                }
                echo "</tr>";
            }
            echo "</table>";
        ?>


    </body>


</html>