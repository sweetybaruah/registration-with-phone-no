<?php
    $db = new SQLite3('data.sqlite');
    $sql = "SELECT * FROM customer";
    $result = $db->query($sql);
    ?>
<html>
    <head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.1.3/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/1.12.1/css/dataTables.bootstrap5.min.css">
 
    </head>
    <body>
        <h1 style="text-align: center">Customer Database</h1>
        <div class="container mt-5">
    <table id="example" class="table table-striped" style="width:100%">
        <thead>
            <tr>
                <th>Name</th>
                <th>Phone No</th>
                <th>Email</th>
                <th>Division</th>
            </tr>
        </thead>
        <tbody>
            <?php
                while ($row= $result->fetchArray()) { ?>
                  
            <tr>
                <td><?php echo $row['name']; ?></td>
                <td><?php echo $row['contactno']; ?></td>
                <td><?php echo $row['email']; ?></td>
                <td><?php echo $row['division']; ?></td>
            </tr>
            <?php } ?>

  
        </tbody>
    </table>
    </div>
            <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
            <script src="https://cdn.datatables.net/1.12.1/js/jquery.dataTables.min.js"></script>
            <script src="https://cdn.datatables.net/1.12.1/js/dataTables.bootstrap5.min.js"></script>
            <script>
                $(document).ready(function () {
                    $('#example').DataTable();
                });
            </script>

    </body>
   
    
</html>