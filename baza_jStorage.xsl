<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">

<html>

<head>
	<meta charset="UTF-8"></meta>
	<link rel="stylesheet" href="styles.css"></link>
	<title>jStorage</title>


	<script src="//cdnjs.cloudflare.com/ajax/libs/json2/20110223/json2.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
	<script src="https://raw.github.com/andris9/jStorage/master/jstorage.js"></script>
	<script type="text/javascript" src="scr_jStorage.js"></script>
</head>
<body>
<header>
	Projekt indywidualny
</header>

<section>

<table>
<tr><th>Nazwa handlowa</th><th>Skład</th><th>Postać</th><th>Specjalności</th><th>Działanie</th><th>Notatka</th></tr>

    <xsl:for-each select="leki/lek">
    <tr>
      <td><xsl:value-of select="nazwa"/></td>
      <td><xsl:value-of select="sklad"/></td>
      <td><xsl:value-of select="postac"/></td>
      <td><xsl:value-of select="specjalnosci"/></td>
      <td><xsl:value-of select="dzialanie"/></td>
            
            
            <td><input type="text" id="val" class="note_val" value="" style="width: 100px" />
	    <button id="" class="add_note" onclick="add(id)">Dodaj</button></td>
            
    </tr>
    </xsl:for-each>

</table>
    <button id="re" class="reset" onclick="flush()">Reset</button>
    <button id="sh" class="show" onclick="show_cache()">Wyświetl cache</button>
</section>

</body>
</html>
</xsl:template>

</xsl:stylesheet>
