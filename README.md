# wordcounty.js
WordCounty.js prints the number of words written in an input such as <textarea> to an output such as a P tag.
# How to use
The function wordCounty() takes in 2 arguments. First one is the ID of the input, second is ID of output.
# Example:
Printing word count on document load
```html
<html>
<body>
<p id="input">This is a sentence</p>
<p id="output"></p>   <!--will print 4 on document load-->

<script src="wordcounty.js"></script>
<script>
wordCounty("input", "output");
</script>
</body>
</html>
```

# Example 2:
Printing word count during typing (like Microsoft Word)
```html
<html>
<body>
<textarea id="input"></textarea>
<p id="output"></p>   <!--will keep changing during typing-->

<script src="wordcounty.js"></script>
<script>
var textArea = document.getElementById('input');
textArea.addEventListener('keyup', function(){
wordCounty("input", "output");
});
</script>
</body>
</html>
```
