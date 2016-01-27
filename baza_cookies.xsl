<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">

<html>

<head>
	<meta charset="UTF-8"></meta>
	<link rel="stylesheet" href="styles.css"></link>
	<title>Cookies</title>

	<script type="text/javascript" src="scr_cookies.js"></script>

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
      <button id="" class="add_note" onclick="setCookie(id)">Dodaj</button></td>
            
    </tr>
    </xsl:for-each>

</table>
    <button id="re" class="reset" onclick="delete_cookies()">Reset</button>
    <button id="sh" class="show" onclick="show_cookies()">Wyświetl ciasteczka</button>
</section>

</body>
</html>
</xsl:template>

</xsl:stylesheet>
