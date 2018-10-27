webpackJsonp([26702724923987],{351:function(a,e){a.exports={data:{markdownRemark:{html:'<p><img src="https://github.com/dacrands/ny_chemical_dependence/raw/master/agegraph.png" alt="Drug Line Chart"></p>\n<p>You may find the dataset for this project <a href="https://catalog.data.gov/dataset/chemical-dependence-treatment-program-admissions-beginning-2007">here</a>. The data is titled <em>Chemical Dependence Treatment Program Admissions: Beginning 2007.</em> It was last updated \tMarch 4, 2015.</p>\n<p>From the source:</p>\n<blockquote>\n<p>NYS Office of Alcoholism and Substance Abuse Services (OASAS) certified chemical dependence treatment programs report admissions of people served in programs throughout NYS. This dataset includes the number of admissions to NYS OASAS certified treatment programs aggregated by the program category, county of the program location, age group of client at admission, and the primary substance of abuse group. </p>\n</blockquote>\n<h2>Background</h2>\n<hr>\n<p>I was having a lot of fun visualizing data scraped from HTML tables, but had yet to really dive into a serious dataset. I was looking for a lot of data, and thought data.gov would have a lot of cool datasets to analyze. After doing some searching around, I came across the dataset used in this project. Given my background in psychology, particularly my work as a research assistant for a clinical psychology lab, this dataset was both familiar and interesting to me. Also, around the time of this project I was volunteering for one of the country\'s largest detox centers, so it was a rewarding experience to be doing both amateur research and clinical work related to substance abuse — I was essentially a full-stack psychologist.</p>\n<p><img src="https://i.imgur.com/CpX0EId.png" alt="Imgur"></p>\n<h2>Python and Excel</h2>\n<hr>\n<p>Though the data came in a variety of forms, at that time I was only comfortable working with <em>.csv</em> files, namely because that meant I could use Excel. </p>\n<p>I find Python and Excel to be a particularly powerful combination; however, there are some caveats to be mindful of when using the two together. For instance, performing the majority — if not all — of your data-massaging in Excel, though perhaps much quicker than using numpy and pandas in the short term, prevents the reusablity and shareability of your code, and ultimately makes your projects no longer open source.</p>\n<p>To that last point, we should be doing this on our own, we\'re developers! Do we really want to be supporting the machine that is <em>Microsoft</em> after what it did to <em>Netscape</em> in the 90s? I didn\'t think so...\n<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Browser_Wars_%28en%29.svg/640px-Browser_Wars_%28en%29.svg.png" alt="browser wars graph"></p>\n<p>That said, I did use Excel a little bit for this project.</p>\n<div class="gatsby-highlight" data-language="python">\n      <pre class="language-python"><code class="language-python">xlsfile <span class="token operator">=</span> pd<span class="token punctuation">.</span>ExcelFile<span class="token punctuation">(</span>r<span class="token string">\'../substance_copy.xlsx\'</span><span class="token punctuation">)</span>\ndframe <span class="token operator">=</span> xlsfile<span class="token punctuation">.</span>parse<span class="token punctuation">(</span><span class="token string">\'main\'</span><span class="token punctuation">)</span></code></pre>\n      </div>',frontmatter:{path:"/8-18-18",title:"Revisiting Python Data Analysis: Part 2",tags:["Python","Matplotlib","Data Visualization"]}}},pathContext:{}}}});
//# sourceMappingURL=path---8-18-18-1077d3371177990cc7bf.js.map