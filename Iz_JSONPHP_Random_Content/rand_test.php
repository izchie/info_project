<html>
<head>
<style>
table, th, td{
  border: 2px soid black;
}
</style>
</head>
<body>


  <table>
    <tr>
      <th>Picture</th>
      <th>Profile</th>
    </tr>
    <tr>
      <td>January</td>
      <td>$100</td>
    </tr>
  </table>

<p align="center">
<?php
$json = file_get_contents
('https://randomuser.me/api/');
$call = json_decode($json); //สร้าง call (ให้เป็นตัว Decode json)

echo '<table><td><tr>'
,'<img src="'.$call->results[0]->picture->large.'"/>'
,'<br> Link : '.$call->results[0]->picture->large
,'<br><br> Gender : '.$call->results[0]->gender
,'<br> Name : '.$call->results[0]->name->title
,' '.$call->results[0]->name->first
,' '.$call->results[0]->name->last
,'<br><br> Username : '.$call->results[0]->login->username
,'<br> Password : '.$call->results[0]->login->password
,'<br> Salt : '.$call->results[0]->login->salt
,'<br> MD5 : '.$call->results[0]->login->md5
,'<br> sha1 : '.$call->results[0]->login->sha1
,'<br> sha256 : '.$call->results[0]->login->sha256
,'</tr></td></table>';
?>
</p>

</body>
</html>
