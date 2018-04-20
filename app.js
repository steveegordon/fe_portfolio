var docFrag = document.createDocumentFragment();
var content = document.getElementById('content');

function getData() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      loadData(this);
    }
  };
  xmlhttp.open("GET", "../assets/articles.xml", true);
  xmlhttp.send();
};

function loadData(xml) {
  var xmlDoc = xml.responseXML;
  var x = xmlDoc.childNodes[0];
  console.log(x.children.length);
  for (var i = 0; i < x.children.length; i++)
  {
   var info = x.children[i];
   var headlineData = info.children[0].innerHTML;
   console.log(info.children[1].innerHTML);
   var titleData = info.children[1].innerHTML;
   var blurbData = info.children[2].innerHTML;
   console.log(info);
   console.log(info.children[0].innerHTML);
   createArticle(i, headlineData, titleData, blurbData);
 };
 content.appendChild(docFrag);
  // console.log(x[0].childNodes[1].childNodes[3].childNodes[0].nodeValue);
  // console.log()
  // console.log(x[0].childNodes[3]);
  // for (i = 0; i < 1; i+2) {
  //   titles[i].innerHTML = x[0].childNodes[i+1].childNodes[3].childNodes[0].nodeValue;
  // }
  // titles[0].innerHTML = x[0].childNodes[0].childNodes[0].nodeValue;
}

function createArticle(num, headlineData, titleData, blurbData){
var number = num.toString();
var article = document.createElement('article');
var heading = document.createElement('div');
var picture = document.createElement('picture');
var source = document.createElement('source');
var img = document.createElement('img');
var subContent = document.createElement('div');
var headline = document.createElement('h3');
var blurb = document.createElement('p');

heading.className = 'heading';
heading.innerHTML = headlineData;
source.setAttribute("srcset", "assets/article" + number + ".jpeg");
img.className = 'subPic';
img.setAttribute("src", "assets/article" + number + ".jpeg");
subContent.className = 'subContent';
headline.innerHTML = titleData;
blurb.innerHTML = blurbData;

picture.appendChild(source);
picture.appendChild(img);
subContent.appendChild(headline);
subContent.appendChild(blurb);
article.appendChild(heading);
article.appendChild(picture);
article.appendChild(subContent);
docFrag.appendChild(article);
};


function addContent(){
  console.log("hello");
  content.appendChild(docFrag);
};



var load = function() {
  getData();
}

load();