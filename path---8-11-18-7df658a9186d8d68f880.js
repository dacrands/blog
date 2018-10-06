webpackJsonp([0x7a831d5167c9],{345:function(n,a){n.exports={data:{markdownRemark:{html:'<h2>Background</h2>\n<hr>\n<h3><em>tl;dr The graphs I made for my undergraduate research posters stunk, so I started to program to get better at visualizing data.</em></h3>\n<p>The whole reason I got started with programming is because I wanted to make nice graphs. As an undergrad I was heavily involved in research, which means I used to have to visualize data for poster presentations. At first, I had zero knowledge of data visualization tools outside of what came with SPSS, PowerPoint, and Excel. Consequently, the graphs on my posters were always drab and uninteresting.</p>\n<p><img src="https://www.biostat.wisc.edu/~kbroman/topten_worstgraphs/epstein_fig1.jpg" alt="example of a bad graph"></p>\n<p>I remember being at a symposium, standing there with my terrible SPSS histograms, and overhearing a conversation between a grad student and a professor. The former said how one of her research assistants makes amazing graphs with matlab. The professor was immediately intrigued and impressed by this, and, to the best of my recollection, began inquiring as to ways to find such students. This had a lasting impact on me, though I wouldn\'t start to program until years later (It\'s a long story).</p>\n<h2>Learning Path</h2>\n<hr>\n<p>I will not go through an in-depth rundown of my learning path here, but these were the first resources I used to learn programming:</p>\n<ul>\n<li>\n<p><strong>Reddit</strong> (e.g., r/learnpython, r/python)</p>\n<p>This remains my post important tool for learning to program.\nI check reddit constantly to stay up to date with the industry.</p>\n</li>\n</ul>\n<ul>\n<li>\n<p><strong>Automate the Boring Stuff (ATBS)</strong></p>\n<p>I can\'t reccommned ATBS enough. It will teach you the basics and have you doing some cool things very quickly. Though I never completed the book, the first few chapters were very informative and well-presented. This is no surprise, as ATBS is perhaps the most highly recommended resource for getting started with Python.</p>\n</li>\n<li>\n<p><strong>$10 udemy course on Python Data Visualization</strong></p>\n<p>I won\'t mention the course here since it has not been updated in quite some time and it wasn\'t super great (free resources are easily as good), but it did get me started with the hallmark data-science libraries.\nI began this course once I had a pretty solid understanding of the fundamentals and OOP. It taught me the basics of <strong>numpy</strong>, <strong>pandas</strong>, and <strong>seaborn,</strong> but most of my learning these libraries came directly from the documentation and <em>stackoverflow</em> questions. Also, there is only so much you can do with seaborn before you need to dive directly into matplotlib.</p>\n</li>\n</ul>\n<p>Now I\'m going to fast-forward a bit, but here are some takeaways from my experience of going from zero programming knowledge to reading, cleaning and visualizing data with Python:</p>\n<ul>\n<li>\n<p><strong>Visualizing data requires a strong understanding of basic data manipulation.</strong> </p>\n<p>Before you can get up and running with the Seaborn and Matplotlib to make pretty graphs, you\'ll need to get a strong understanding of Numpy and Pandas. This, in turn, requires a strong understanding of data-objects and tools, e.g., matrices, dataframes, pivot tables, and the ability slice and manipulate said objects for analysis.</p>\n</li>\n<li>\n<p><strong>Use Conda and Jupyter Notebooks</strong>. </p>\n<p>If you are not familiar with Conda or Jupyter Noteboks, I suggest you look into them. Conda makes working with packages and virtual environments very easy. Jupyter Notebooks allow you run code in snippets in Google Chrome without having to boot up an IDE. I will not go into the the complete awesomeness of Jupyter Notebooks and Conda here, but I really enjoy working with them.</p>\n</li>\n<li>\n<p><strong>Use virtual environments.</strong> </p>\n<p>It\'s better to get familiar with virtual environments sooner rather than later, especially since some really awesome data libraries, such as word-cloud, rely on earlier versions of libraries such as Numpy. </p>\n<p>Virtual environments are particularly easy to set up with Conda, though there are some issues when using them on Windows, so be careful. I suggest using the Command Prompt and not PowerShell when using virtual environments on Windows, since the former will indicate whether the env is active or not.</p>\n<p>For example:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">:: command prompt\nC:\\Users\\dacrands&gt;activate wordcloudenv\n(wordcloudenv) C:\\Users\\dacrands&gt;</code></pre>\n      </div>\n<p>vs.</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">:: PowerShell\nC:\\Users\\dacrands&gt;activate wordcloudenv\nC:\\Users\\dacrands&gt;</code></pre>\n      </div>\n</li>\n</ul>\n<br />\n<h2>My First Data Project</h2>\n<hr>\n<p><img src="https://github.com/dacrands/ww1WikiGraphs/raw/master/mili-graph.png" alt="WW1 military casualties graph">\n<img src="https://github.com/dacrands/ww1WikiGraphs/raw/master/civi-graph.png" alt="WW1 civilian casualties graph"></p>\n<p>This project will always have a special place in my heart. It was the first time in my programming journey when I envisioned something that would be really cool to make and actually made it. Of course the dataset was extremely small, but it didn\'t matter. I took data and visualized it using Python, I achieved one of my dreams! I did something that potentially would have impressed that professor I never actully met from years earlier!</p>\n<p>Anyway, the data for this project was taken from a Wikipedia table, which was incredibly easy to scrape using Pandas, although the data was in pretty rough shape.</p>\n<h3>The Regex</h3>\n<p>The data from the table came in a strange string (e.g, <em>"56,639[18] to 64,996 [9]"</em>, <em>"1,700,000[33] to 2,254,369[51]"</em>) when I needed integers, thus I employed some regex magic. I created a function to grab the lower estimates of the data (i.e., <em>56,639</em> instead of <em>64,996</em>): </p>\n<div class="gatsby-highlight" data-language="python">\n      <pre class="language-python"><code class="language-python"><span class="token keyword">def</span> <span class="token function">column_cleaner</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">:</span>    \n    <span class="token triple-quoted-string string">"""\n    In: array of strs containing numerical characters delimited by commas and\n    NaN values (i.e., a Wikipedia table column)\n    Out: array of ints\n    """</span>    \n    newList <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token keyword">for</span> i <span class="token keyword">in</span> arr<span class="token punctuation">:</span>\n        <span class="token keyword">if</span> <span class="token builtin">type</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token keyword">is</span> <span class="token builtin">str</span><span class="token punctuation">:</span>\n            newList<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">(</span>re<span class="token punctuation">.</span><span class="token builtin">compile</span><span class="token punctuation">(</span>r<span class="token string">\'\\d{2,}\'</span><span class="token punctuation">)</span>\n              <span class="token punctuation">.</span>search<span class="token punctuation">(</span>i<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">\',\'</span><span class="token punctuation">,</span> <span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n              <span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n        <span class="token keyword">else</span><span class="token punctuation">:</span>\n            newList<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>\n\n    <span class="token keyword">return</span> newList</code></pre>\n      </div>\n<p><em>Yes, I know this function isn\'t very good as there is no error handling, etc., but I was young and it works.</em></p>\n<p>Now let\'s take a look at the data so we can see this super cool function in action.</p>\n<h3>The Data</h3>\n<p>As I mentioned, Pandas made grabbing the data very easy.</p>\n<div class="gatsby-highlight" data-language="python">\n      <pre class="language-python"><code class="language-python"><span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd\n\nww1_data <span class="token operator">=</span> pd<span class="token punctuation">.</span>read_html<span class="token punctuation">(</span><span class="token string">\'https://en.wikipedia.org/wiki/World_War_I_casualties\'</span><span class="token punctuation">)</span>\ndframe <span class="token operator">=</span> DataFrame<span class="token punctuation">(</span>ww1_data<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p><img src="https://i.imgur.com/cGD5VTk.jpg" alt="WW1 wikipedia table"></p>\n<p>That\'s it! I believe pandas is grabbing the innerHTML of the table, in the process turning things like <em>a</em> tags into\nplain strings.\nSo now that we have the data, it\'s just a matter of cleaning things up.</p>\n<p><strong>First,</strong> let\'s rename our columns to something a bit less verbose.</p>\n<div class="gatsby-highlight" data-language="python">\n      <pre class="language-python"><code class="language-python">dframe <span class="token operator">=</span> dframe<span class="token punctuation">.</span>rename<span class="token punctuation">(</span>columns<span class="token operator">=</span><span class="token punctuation">{</span>\n                              <span class="token number">0</span><span class="token punctuation">:</span> <span class="token string">\'countries\'</span><span class="token punctuation">,</span>\n                              <span class="token number">1</span><span class="token punctuation">:</span> <span class="token string">\'pop\'</span><span class="token punctuation">,</span>\n                              <span class="token number">2</span><span class="token punctuation">:</span> <span class="token string">\'dead/MIA\'</span><span class="token punctuation">,</span>\n                              <span class="token number">3</span><span class="token punctuation">:</span> <span class="token string">\'allDead\'</span><span class="token punctuation">,</span>\n                              <span class="token number">4</span><span class="token punctuation">:</span> <span class="token string">\'civisDead\'</span><span class="token punctuation">,</span>\n                              <span class="token number">5</span><span class="token punctuation">:</span> <span class="token string">\'civisIndirectDead\'</span><span class="token punctuation">,</span>\n                              <span class="token number">6</span><span class="token punctuation">:</span> <span class="token string">\'TotDeaths\'</span><span class="token punctuation">,</span>\n                              <span class="token number">7</span><span class="token punctuation">:</span> <span class="token string">\'DeadPop%\'</span><span class="token punctuation">,</span>\n                              <span class="token number">8</span><span class="token punctuation">:</span> <span class="token string">\'miliWounded\'</span>\n                            <span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<br />\n<p><img src="https://i.imgur.com/OrJ2ocb.png" alt="Clean graph&#x27;s columns">\nYou may have noticed that the dataframe is transposed.\nI did this several times throughout the project because, at least at the time,\nthis made indexing and renaming columns much easier.</p>\n<p><strong>Second,</strong> let\'s use that function I mentioned earlier to convert these messy strings into some nice integers.</p>\n<div class="gatsby-highlight" data-language="python">\n      <pre class="language-python"><code class="language-python">  <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token punctuation">[</span><span class="token string">\'dead/MIA\'</span><span class="token punctuation">,</span> <span class="token string">\'allDead\'</span><span class="token punctuation">,</span> <span class="token string">\'civisDead\'</span><span class="token punctuation">,</span> <span class="token string">\'civisIndirectDead\'</span><span class="token punctuation">,</span> <span class="token string">\'TotDeaths\'</span><span class="token punctuation">,</span> <span class="token string">\'miliWounded\'</span><span class="token punctuation">]</span><span class="token punctuation">:</span>\n    power_frame<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> column_cleaner<span class="token punctuation">(</span>power_frame<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span></code></pre>\n      </div>\n<p><em>Note: we are only doing this for select columns</em></p>\n<p>I\'ll show the <em>dramatic</em> results of this function below.</p>\n<p><strong>Third,</strong> the table contained data for 30 countries, when I only wanted to look at a select few. Here\'s how I created a new data-frame containing only the countries I was interested in: </p>\n<div class="gatsby-highlight" data-language="python">\n      <pre class="language-python"><code class="language-python">power_frame <span class="token operator">=</span> dframe<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">21</span><span class="token punctuation">,</span><span class="token number">14</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">24</span><span class="token punctuation">,</span><span class="token number">12</span><span class="token punctuation">,</span><span class="token number">19</span><span class="token punctuation">,</span><span class="token number">26</span><span class="token punctuation">,</span><span class="token number">27</span><span class="token punctuation">]</span><span class="token punctuation">]</span>\npower_frame<span class="token punctuation">[</span><span class="token string">\'countries\'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>\n                      <span class="token string">\'USA\'</span><span class="token punctuation">,</span>\n                      <span class="token string">\'Italy\'</span><span class="token punctuation">,</span>\n                      <span class="token string">\'UK\'</span><span class="token punctuation">,</span>\n                      <span class="token string">\'Aus-Hung\'</span><span class="token punctuation">,</span>\n                      <span class="token string">\'France\'</span><span class="token punctuation">,</span>\n                      <span class="token string">\'Russia\'</span><span class="token punctuation">,</span>\n                      <span class="token string">\'Germany\'</span><span class="token punctuation">,</span>\n                      <span class="token string">\'Ottoman\'</span>\n                    <span class="token punctuation">]</span></code></pre>\n      </div>\n<p>And that\'s about it in terms of the data.</p>\n<h4>Before...</h4>\n<p><img src="https://i.imgur.com/cGD5VTk.jpg" alt="WW1 wikipedia table"></p>\n<h4>After...</h4>\n<p><img src="https://i.imgur.com/hQph3cX.jpg" alt="Imgur"></p>\n<h2>Going Back</h2>\n<hr>\n<p>I revisited a lot of old code in the writing of this post and it\'s been, for the most part, a pleasurably nostalgic journey back to the world of Python data-science. Although my intention was to just paste some snippets of code and show the graphs, when writing this I actually booted up a jupyter notebook and began running the scripts I wrote. Thankfully this project still works.</p>\n<p><img src="https://i.imgur.com/kNN4Z4J.jpg" alt="new ww1 casualty graph"></p>\n<p>My primary reason for revisualizing the data was to see if I still could. Luckily there wasn\'t much of an issue putting the above barplot together, though I did <em>not</em> miss the matplotlib documentation. Documentation for web development is presented so beautifully and written with character, web devs are truly spoiled in that sense. It makes sense that <em>Stackoverflow</em> answers most of my matplotlib questions, as the library\'s docs leave a lot to be desired.   </p>',frontmatter:{path:"/8-11-18",title:"Revisiting Python Data Visualization",tags:["Python","Matplotlib","Data Visualization","Jupyter Notebooks"]}}},pathContext:{}}}});
//# sourceMappingURL=path---8-11-18-7df658a9186d8d68f880.js.map