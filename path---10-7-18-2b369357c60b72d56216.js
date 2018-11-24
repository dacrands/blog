webpackJsonp([0xb4f04fed1af2],{347:function(e,a){e.exports={data:{markdownRemark:{html:'<p>\n<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/WinonaSavingsBankVault.JPG/1024px-WinonaSavingsBankVault.JPG" alt="Bank Vault"></p>\n<p><em>(This blog post is a work in progress.)</em></p>\n<p>In the <a href="https://dacrands.github.io/9-27-18">last installment</a>, we discussed some ways in which front-end developers can protect their API-keys. We came to the conclusion that to truly protect your API-keys, you will need a designated back-end — a proxy server — to handle your API calls.</p>\n<p>In this example we will be using <em>Flask</em> to create such an application, though the general concept can be easily applied by developers of any stack. The idea is that our front-end application will send a request to our <em>Flask</em> app. Then our app, based on the request from the client, will send a request to the API. In doing so, we no longer need an API-key to be present in the client request since it will be handled by our back-end.</p>\n<h2>Table of Contents</h2>\n<hr>\n<ul>\n<li>\n<p><a href="#prereq">Prerequisites</a></p>\n<!-- - [Git/Github](#git)   -->\n</li>\n<li><a href="#theApp">What we\'re making</a></li>\n<li>\n<p><a href="#env">Environments</a></p>\n<!-- - [Create an Environment](#createEnv) -->\n<!-- - [Activate an Environment](#activeEnv) -->\n</li>\n<li>\n<p><a href="#appItUp">App It Up</a></p>\n<!-- - [\\__init__.py](#init) -->\n<!-- - [routes.py](#routesPy) -->\n<!-- - [run.py](#run) -->\n<!-- - [FLASK_APP](#flaskApp) -->\n</li>\n<li>\n<p><a href="#config">Configuration</a></p>\n<!-- - [config.py](#configPy) -->\n</li>\n<li>\n<p><a href="#requests">Requests</a></p>\n<!-- - [Let\'s make a request](#makeRequest) -->\n</li>\n<li><a href="#requests">Routes</a></li>\n<li>\n<p><a href="#hosting">Hosting</a></p>\n<!-- - [Download Heroku](#heroku) -->\n</li>\n</ul>\n<p><a id="prereq"></a></p>\n<h2>Prerequisites</h2>\n<hr>\n<ul>\n<li>an API you\'re interested in and any necessary keys. <a href="https://apilist.fun/">Here a big list of APIs</a></li>\n<li>Basic command-line skills</li>\n<li>Python 3</li>\n<li>Git/Github</li>\n</ul>\n<p>My goal is to make this tutorial accessible to front-end developers with limited back-end and Python experience. Luckily, Python syntax is very semantic and intuitive, so hopefully developers from other stacks will have no problem following along with the examples used in this post.</p>\n<p>If you\'re a back-end developer, this is not for you. You know what to do already. This is for our beginner front-end developers who want to hide their keys, nothing more.</p>\n<p><a id="git"></a></p>\n<h3>Git/Github</h3>\n<p>At some point in this project, you will need to create a git repo. At what point in the application you integrate version-control is up to you, but having basic git skills is needed for when we host the finished-product on <em>Heroku.</em></p>\n<p><a id="theApp"></a></p>\n<h2>What We\'re Making</h2>\n<hr>\n<p><img src="https://i.imgur.com/8RAVXwH.png" alt="Imgur"></p>\n<p>Here is <a href="https://github.com/dacrands/flask-blog-tutorial">Github repo</a> for what we\'re building.</p>\n<p>We\'rea building a very minimal Flask app. We don\'t need a database, we just need a server to make requests to our API and pass JSON to our React/Redux app. There will be vulnerabilities in this app, but your API-key will be safe and others will take note of your effort to keep it secret (hopefully).</p>\n<p>If you\'re looking for an in-depth introduction to Flask, Miguel Ginberg\'s <a href="https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world">Flask mega tutorial</a> is excellent.</p>\n<p><a id="env"></a></p>\n<h2>Environments</h2>\n<hr>\n<p>For any Python project, regardless of it\'s size or complexity, it\'s a good idea to create a virtual environment. This ensures that as libraries update and backwards-compatability becomes an issue, your app will still work.</p>\n<p><a id="createEnv"></a></p>\n<h3>Create an Environment</h3>\n<p>When it comes to Python, I\'m an  <a href="https://www.anaconda.com/">Anaconda</a> person. Anconda is basically Python but it comes bundled with a lot of data-science libraries and other features like <a href="http://jupyter.org/">Jupyter Notebooks</a>. I suggest you give it a try. </p>\n<p>Find the <a href="https://www.anaconda.com/download">download instructions</a> for your OS and install Anaconda. If you don\'t use Anaconda, here are the instructions for <a href="https://packaging.python.org/guides/installing-using-pip-and-virtualenv/">creating a virtualenv with pip</a>. We will only being using <code class="language-text">conda</code>, the Anaconda CLI, for creating our environment and downloading <code class="language-text">pip</code>. After that, we will use <code class="language-text">pip</code> for everything else.</p>\n<p>Now that that\'s out of the way, go ahead and create an environment for your Flask app using <code class="language-text">conda</code>:</p>\n<div class="gatsby-highlight" data-language="commandline">\n      <pre class="language-commandline"><code class="language-commandline">C:\\&gt; conda create --name flaskenv</code></pre>\n      </div>\n<br>\n<p>This will create a virtual environment named <code class="language-text">flaskenv</code>.\nTo see a list of your virtual environments, run the following:</p>\n<div class="gatsby-highlight" data-language="commandline">\n      <pre class="language-commandline"><code class="language-commandline">C:\\&gt; conda info --env</code></pre>\n      </div>\n<br>\n<p>This will print a list of your environments to the console. Learn more about <a href="https://conda.io/docs/user-guide/tasks/manage-environments.html">managing environments with conda</a>.</p>\n<p><a id="activeEnv"></a></p>\n<h3>Activating an Environment</h3>\n<p>I will demonstrate how to activate a Python environment on a Windows OS, simply because Windows users have it hard enough as it is.</p>\n<p>I love <em>PowerShell,</em> but when it comes to Python virtual-environments you\'ll want to use the command prompt. We have a lot to cover in this post, so I won\'t go in-depth as to why we are using the latter versus the former, though I encourage you to play around with both options to discover the answer organically.</p>\n<div class="gatsby-highlight" data-language="commandline">\n      <pre class="language-commandline"><code class="language-commandline">C:\\&gt; activate flaskenv\n(flaskenv) C:\\&gt; </code></pre>\n      </div>\n<br>\n<h3>pip</h3>\n<p>Once your environment is activated, you can start installing your packages. The first package you will need is <code class="language-text">pip</code>, as this is how we will be downloading our packages. I know this may appear a bit strange to download a package-manager inside a package-manager, but it demonstrates the flexibility of using <code class="language-text">conda</code>.</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">(flaskenv) C:\\&gt; conda install pip</code></pre>\n      </div>\n<br>\n<p>Now we can use <code class="language-text">pip</code> to install our packages, but always make sure your environment is active before doing so. If your environment is not active, not only will you be downloading all of those packages globally on your machine, but you will not be able to save the packages you use to the <code class="language-text">requirements.txt</code> file, which is used to automatically download all of the packages in your application (Think of the <code class="language-text">requirements.txt</code> as a <code class="language-text">package.json</code> because it essentially is).</p>\n<p>Once you install <code class="language-text">pip</code>, you can install <code class="language-text">flask</code> using <code class="language-text">pip</code>.</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">(flaskenv) C:\\&gt; pip install flask</code></pre>\n      </div>\n<br>\n<h3>requirements.txt</h3>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">(flaskenv) C:\\api-app\\&gt; pip freeze &gt; requirements.txt</code></pre>\n      </div>\n<br>\n<p>This will save your packages to a file that can be used to install your app dependencies.</p>\n<p>Presuming everything went smoothly, we can move on to creating our app.</p>\n<p><a id="appItUp"></a></p>\n<h2>App It Up</h2>\n<hr>\n<p>Create a new directory <code class="language-text">api-app</code> with the following structure:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">api-app/\n  app/\n    __init__.py\n    routes.py\n  run.py</code></pre>\n      </div>\n<br>\n<p><a id="init"></a></p>\n<h3>__init__.py</h3>\n<div class="gatsby-highlight" data-language="python">\n      <pre class="language-python"><code class="language-python"><span class="token keyword">from</span> flask <span class="token keyword">import</span> Flask\n\napp <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span></code></pre>\n      </div>\n<br>\n<p>If you\'d like to learn more about Python class and OOP, <a href="https://jeffknupp.com/blog/2014/06/18/improve-your-python-python-classes-and-object-oriented-programming/">this article</a> by Jeff Knupp is a good start.</p>\n<p>Here we are assigning an instance of the <code class="language-text">Flask</code> class to the variable <code class="language-text">app</code>. As your app becomes more complex, you will pass this class instance to other libraries. For example:</p>\n<div class="gatsby-highlight" data-language="python">\n      <pre class="language-python"><code class="language-python"><span class="token keyword">from</span> flask <span class="token keyword">import</span> Flask\n<span class="token keyword">from</span> flask_sqlalchemy <span class="token keyword">import</span> SQLAlchemy\n\napp <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>\ndb <span class="token operator">=</span> SQLAlchemy<span class="token punctuation">(</span>app<span class="token punctuation">)</span></code></pre>\n      </div>\n<p><em>Note: This example is not part of this project.</em>\n<br></p>\n<p>This is how inheritance works in Python. The SQLAlchemy class (the child class) instance inherits <code class="language-text">app</code> (the parent class) — this provides the child class with the attributes and methods of the parent class.</p>\n<p>Passing <code class="language-text">__name__</code> to <code class="language-text">Flask</code> tells Python the proper way to execute the file. This has to do with how Python executes programs. For more information, you may reference <a href="https://stackoverflow.com/questions/419163/what-does-if-name-main-do">this stackoverflow post</a>.</p>\n<p><a id="routesPy"></a></p>\n<h3>routes.py</h3>\n<div class="gatsby-highlight" data-language="python">\n      <pre class="language-python"><code class="language-python"><span class="token keyword">from</span> app <span class="token keyword">import</span> app\n\n@app<span class="token punctuation">.</span>route<span class="token punctuation">(</span><span class="token string">\'/\'</span><span class="token punctuation">)</span>\n<span class="token keyword">def</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">return</span> <span class="token string">\'Hello, World!\'</span></code></pre>\n      </div>\n<br>\n<p>For brevity sake, we won\'t delve too much into the syntax here. Hopefully it\'s somewhat readily apparent what is happening here. If it\'s not, it will be as we create more routes.</p>\n<p>Now that we have a route created, we can import our routes into our <em>__init__.py</em> file.</p>\n<div class="gatsby-highlight" data-language="python">\n      <pre class="language-python"><code class="language-python"><span class="token comment"># app/__init__.py</span>\n<span class="token keyword">from</span> flask <span class="token keyword">import</span> Flask\n\napp <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>\n\n<span class="token keyword">from</span> app <span class="token keyword">import</span> routes</code></pre>\n      </div>\n<br>\n<p>We place the routes import at the bottom to avoid what\'s known as a <em>circular dependency</em> — you can learn more about this issue <a href="https://stackabuse.com/python-circular-imports/">here</a>.</p>\n<p><a id="run"></a></p>\n<h3>run.py</h3>\n<div class="gatsby-highlight" data-language="python">\n      <pre class="language-python"><code class="language-python"><span class="token keyword">from</span> app <span class="token keyword">import</span> app</code></pre>\n      </div>\n<br>\n<p>That\'s all the file requires. To clarify,  <em>app</em> is the Flask instance we created in <em>__init__.py</em>, and it is a member of the <em>app</em> package. The <em>app</em> package refers to the <em>/app</em> folder in our directory, thus why in our <em>__init__.py</em> file we are able to import our <em>routes</em> from <em>app</em>.</p>\n<!-- ```\n/app\n  routes.py\n``` -->\n<!-- <br> -->\n<p><a id="flaskApp"></a></p>\n<h3>FLASK_APP</h3>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">(flaskenv) C:\\api-app\\&gt;set FLASK_APP=run.py</code></pre>\n      </div>\n<p>Flask will look for an environment <code class="language-text">FLASK_APP</code> set to, in this case, <em>run.py</em>. This will instruct Flask on the proper way to import our application.</p>\n<h3>Run it!</h3>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">(flaskenv) C:\\api-app\\&gt;flask run</code></pre>\n      </div>\n<br>\n<p>If everything goes smoothly, you can visit your app at <code class="language-text">http://127:0.0.0.1:5000/</code> and hopefully see "Hello, World" in the browser.</p>\n<p><a id="config"></a></p>\n<h2>Configuration</h2>\n<hr>\n<p>We are going to add a <em>config.py</em> file to our project. This is where the developer can define some variables that will be used throughout the application. It\'s a good place to create variables that the developer wants to keep secret, such as API-keys.</p>\n<p>Once you add the <em>config.py</em> file, your project structure should look something like this:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">api-app/\n  app/\n    __init__.py\n    routes.py\n  run.py\n  config.py</code></pre>\n      </div>\n<br>\n<p>Once we create our <em>config.py</em>, we need to tell our <em>app</em> to use it. Here config is referencing our file <em>config.py</em> and not an installed library.</p>\n<div class="gatsby-highlight" data-language="python">\n      <pre class="language-python"><code class="language-python"><span class="token comment"># app/__init__.py</span>\n<span class="token keyword">from</span> flask <span class="token keyword">import</span> Flask\n<span class="token keyword">from</span> config <span class="token keyword">import</span> Config\n\napp <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>\napp<span class="token punctuation">.</span>config<span class="token punctuation">.</span>from_object<span class="token punctuation">(</span>Config<span class="token punctuation">)</span>\n\n<span class="token keyword">from</span> app <span class="token keyword">import</span> routes</code></pre>\n      </div>\n<br>\n<p><a id="configPy"></a></p>\n<h3>config.py</h3>\n<div class="gatsby-highlight" data-language="python">\n      <pre class="language-python"><code class="language-python"><span class="token comment"># app/config.py</span>\n<span class="token keyword">import</span> os\n\n<span class="token keyword">class</span> <span class="token class-name">Config</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n  API_KEY <span class="token operator">=</span> os<span class="token punctuation">.</span>environ<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">\'API_KEY\'</span><span class="token punctuation">)</span> <span class="token operator">or</span> <span class="token string">\'nice-try\'</span>  </code></pre>\n      </div>\n<br>\n<p>Recall in the first post when we used <code class="language-text">process.env.API_KEY</code> to keep the API out of version-control? Well, <code class="language-text">os.environ.get(&#39;API_KEY&#39;)</code> is doing the same thing. The configuration object will check to see if the environment variable <code class="language-text">API_KEY</code> exists, if it doesn\'t we provide a sarcastic fallback.</p>\n<p>As a reminder, you set environment variables like this:</p>\n<div class="gatsby-highlight" data-language="bash">\n      <pre class="language-bash"><code class="language-bash"><span class="token comment"># Bash</span>\n$ <span class="token function">export</span> API_KEY<span class="token operator">=</span>someKey</code></pre>\n      </div>\n<div class="gatsby-highlight" data-language="commandline">\n      <pre class="language-commandline"><code class="language-commandline">:: windows\n(flaskenv) C:\\api-app\\&gt; set API_KEY=someKey</code></pre>\n      </div>\n<br>\n<p>As I mentioned this app is minimal, thus our <em>config.py</em> only contains one <em>key</em>. Yes, a <em>key</em>. For JavaScript developers, you can think of our configuration object as a JS-object — a collection of <em>key</em>, <em>value</em> pairings. </p>\n<p>For example, accessing the <code class="language-text">API_KEY</code> defined in our <em>config.py</em> file will look something like this:</p>\n<div class="gatsby-highlight" data-language="python">\n      <pre class="language-python"><code class="language-python"><span class="token keyword">from</span> app <span class="token keyword">import</span> app\n\n<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n\nAPI_KEY <span class="token operator">=</span> app<span class="token punctuation">.</span>config<span class="token punctuation">[</span><span class="token string">\'API_KEY\'</span><span class="token punctuation">]</span></code></pre>\n      </div>\n<br>\n<p>I hope it\'s becoming clearer what is taking place in our <em>__init__.py</em> file. If not, there is no issue with treating this application as a bit of a black-box while you continue learning. I made it made it clear the purpose of this application is hiding your API-key from wrong-doers. For front-end developers with no interest in learning Python, not having a deep-understanding of Python modules is okay. In other words, this blog post is getting quite lengthy and I don\'t have time to elaborate on the nuances of Python here.</p>\n<p><a id="requests"></a></p>\n<h2>Requests</h2>\n<hr>\n<p>Now that our basic Flask app is in place, we can begin creating the routes our front-end will access. For this tutorial we will only create one route, though the logic is easily replicable for additional routes.</p>\n<p>To access the API, we will use the Python\'s <code class="language-text">requests</code> library. </p>\n<p>Run the following in your terminal:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">(flaskenv) C:\\api-app\\&gt; pip install requests</code></pre>\n      </div>\n<br>\n<p><a id="makeRequest"></a></p>\n<h3>Lets make a request</h3>\n<p>Close your app if it\'s running, and enter <code class="language-text">python</code> in your terminal. This will activate the Python command-line, which is where we\'ll explore the <code class="language-text">requests</code> library.</p>\n<div class="gatsby-highlight" data-language="commandline">\n      <pre class="language-commandline"><code class="language-commandline">(flaskenv) C:\\api-app\\&gt;python\nPython 3.6.0 |Anaconda custom (64-bit)| (default, Dec 23 2016, 11:57:41) \n[MSC v.1900 64 bit (AMD64)] on win32\nType &quot;help&quot;, &quot;copyright&quot;, &quot;credits&quot; or &quot;license&quot; for more information.\n&gt;&gt;&gt;</code></pre>\n      </div>\n<p><em>To exit the Python terminal,  enter</em> <code class="language-text">quit()</code><em>, because</em> <code class="language-text">ctrl-c</code> <em>won\'t do it.</em></p>\n<p>For this example, let\'s use an API that doesn\'t require a key. We will use the <a href="https://iextrading.com/developer/docs/">IEX API</a>, a free stock API.</p>\n<p><strong>Copy this URL:</strong> <code class="language-text">https://api.iextrading.com/1.0/stock/market/batch?symbols=fb,f&amp;types=quote,news</code></p>\n<p>Here <code class="language-text">fb</code> and <code class="language-text">f</code> are ticker symbols for Facebook and Ford, respectively. Even if you pass invalid symbol parameters (i.e., ticker symbols that don\'t exist), the API response will still return data for valid queries, which is really nice.</p>\n<p>Let\'s make our first request. Enter the following in your Python terminal:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">&gt;&gt;&gt;import requests\n&gt;&gt;&gt;res = requests.get(&#39;https://api.iextrading.com/1.0/stock/market/batch?symbols=fb,asdasdasd,f&amp;types=quote,news&#39;)</code></pre>\n      </div>\n<br>\n<p><code class="language-text">requests.get()</code> will make a <em>GET</em> request to the passed URL and return a <code class="language-text">&lt;Response&gt;</code> object. This object will have attributes expected in an HTTP response.</p>\n<p>For example, let\'s make sure the request was succcessful:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">&gt;&gt;&gt; res.status_code\n200</code></pre>\n      </div>\n<br>\n<p>If everything goes well, we get the glorious status code of <code class="language-text">200</code>.</p>\n<p>Since we know our request was successful, let\'s take a look at the data:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">&gt;&gt;&gt; resJson = res.json()\n&gt;&gt;&gt; resJson\n{&#39;FB&#39;: {&#39;quote&#39;: {&#39;symbol&#39;: &#39;FB&#39;,&#39;companyName&#39;: &#39;Facebook Inc.&#39;&#39;primaryExchange&#39;: &#39;Nasdaq Global Select&#39; &#39;sector&#39;:\n...</code></pre>\n      </div>\n<br>\n<p>Sorry for the console dump, but you get a sense of the data. By calling <code class="language-text">res.json()</code> we can now index our data, so let\'s get some data that\'s a bit more managable:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">&gt;&gt;&gt; resJson[&#39;FB&#39;][&#39;quote&#39;][&#39;open&#39;]\n145.83</code></pre>\n      </div>\n<br>\n<p>I encourage you to play around a bit with the <code class="language-text">requests</code> library. Otherwise, let\'s get back to the app.</p>\n<h2>Routes</h2>\n<hr>\n<p>Make the following modifications to <em>app/routes.py</em>:</p>\n<div class="gatsby-highlight" data-language="python">\n      <pre class="language-python"><code class="language-python"><span class="token keyword">from</span> app <span class="token keyword">import</span> app\n<span class="token keyword">from</span> flask <span class="token keyword">import</span> jsonify\n<span class="token keyword">import</span> requests\n\n@app<span class="token punctuation">.</span>route<span class="token punctuation">(</span><span class="token string">\'/\'</span><span class="token punctuation">)</span>\n<span class="token keyword">def</span> <span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n    res <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>\n        <span class="token string">\'https://api.your-api.com/something.json?api-key={0}\'</span>\n        <span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>app<span class="token punctuation">.</span>config<span class="token punctuation">[</span><span class="token string">\'API_KEY\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    \n    <span class="token keyword">if</span> res<span class="token punctuation">.</span>status_code <span class="token operator">!=</span> <span class="token number">200</span><span class="token punctuation">:</span>\n        errData <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">\'status\'</span><span class="token punctuation">:</span> res<span class="token punctuation">.</span>status_code<span class="token punctuation">,</span> <span class="token string">\'error\'</span><span class="token punctuation">:</span> <span class="token string">\'There was an error\'</span><span class="token punctuation">}</span>\n        <span class="token keyword">return</span> jsonify<span class="token punctuation">(</span>errData<span class="token punctuation">)</span><span class="token punctuation">,</span> res<span class="token punctuation">.</span>status_code\n\n    apiData <span class="token operator">=</span> jsonify<span class="token punctuation">(</span>res<span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token keyword">return</span> apiData</code></pre>\n      </div>\n<br>\n<p>As you can see, we pass our <code class="language-text">res.json()</code> to <code class="language-text">jsonify()</code>, which is imported from <code class="language-text">flask</code>. This is because <code class="language-text">res.json()</code> does not provide the encoding we need. By passing our data to <code class="language-text">jsonify</code>, we now get a flask <em>Response</em> object that will properly serialize our data as <em>application/json</em> mimetype.</p>\n<p>Visit <code class="language-text">http://localhost:5000</code> and you should see a whole bunch of data. If you use <em>Chrome,</em> <a href="https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=en">download JSON view</a>. <em>JSON view</em> will format your JSON data so it doesn\'t appear as one big mess in your browser.</p>\n<p>Once you download <em>JSON view,</em> you should see something like this when you access the route:</p>\n<p><img src="https://i.imgur.com/KSS78J5l.jpg" alt="JSON view example"></p>\n<p>Now what you see in the browser when you visit <code class="language-text">localhost:5000</code> should look <strong>exactly</strong> the same as when you place the actual API URL in the browser. The primary difference, of course, is now your API-key will not appear in the response:</p>\n<p><img src="https://i.imgur.com/4jtwzwdl.jpg" alt="Example of response with no API-key"></p>\n<!-- ### More routes -->\n<h3>Development</h3>\n<p>When developing, the only thing you need to do is make sure your front-end app and back-end app are listening on different ports. For example, your front-end app will run on port <code class="language-text">8000</code> and your back-end app will run on port <code class="language-text">5000</code>.</p>\n<p><a id="hosting"></a></p>\n<h2>Hosting</h2>\n<hr>\n<!-- Your basic application is now in place, so how do you use it? Well it needs to be hosted on a server. We are going to configure two servers: one for  **development** and one for **production**. The development server will be served locally on your machine &mdash; this is the server you will use while you build and debug your front-end application. The production will be hosted on [Heroku](https://www.heroku.com/), which offers both free and reasonably priced monthly plans ($7 a month).  -->\n<!-- Configuring the development server will be extremely easy. In fact, it\'s about one line from the console. The production server, however, will take a bit more effort. Heroku will provide you -->\n<!-- #### Run on a different machine\n\nAlthough you can run both your front-end and back-end on the same computer, you may not want to. Luckily, provided you have Python configured on another machien\n\nFirst, find our your IP-address. If you have *PowerShell,* run the following:\n\n```ps\nC:\\> Get-NetIPAddress\n```\n<br>\n\nIn the output, look for the IP-address starting with `192.168.0.xxx`\n\nOnce you have your IP-address, run the following in the console.\n\n```commandline\n(flaskenv) C:\\api-app\\>flask run --host 0.0.0.0\n```\n\n<br>\n\nNow visit the following in the browser:\n```\n192.168.0.xxx:5000\n```\n<br>\n\nOkay, so what\'s the difference between this and simply running the \nNow find another device with a web-browser and visit the same address. It still works! How cool is that? Now you can free up `localhost` to host your front-end application &mdash; just point it to API-calls to `192.168.0.xxx:5000`. -->\n<p>We will use <em>Heroku</em> to host our application since it is the most user-friendly option, however I suggest you check out <em>Digitalocean,</em> go through some tutorials, and challenge yourself a bit. Otherwise, <em>Heroku</em> is still an excellent and popular hosting service.</p>\n<p><a id="heroku"></a></p>\n<h3>Download Heroku</h3>\n<p>The first thing you need to do is <a href="https://devcenter.heroku.com/articles/heroku-cli">download the Heroku CLI</a> and go through the tutorial — this will take you through the proces of creating your first heroku app.</p>\n<p>We will be using Heroku\'s free plan, because it\'s free. The catch, however, is that your application will turn off after 30 minutes. If you decide to upgrade your plan to <code class="language-text">hobby</code>, it\'s only about $7 a month depending on your site\'s traffic.</p>\n<h3>Gunicorn</h3>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">(flaskenv) C:\\api-app\\&gt; pip install gunicorn</code></pre>\n      </div>\n<br>\n<p><a href="https://gunicorn.org/">Gunicorn</a> is a "Python WSGI HTTP Server for UNIX." Basically it will provide the production server for our application. </p>\n<h3>Procfile</h3>\n<p>We need to tell Heroku how to run our application — this is where the <em>Procfile</em> comes in. In the <em>Procfile</em> we will tell our <code class="language-text">dyno</code> (the server instance our application is running on) what it should do once the server starts up.</p>\n<p>Create a new file in the root-directory named <em>Procfile</em> — no extensions, simply <strong>Procfile</strong></p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">api-app/\n  app/\n    __init__.py\n    routes.py\n  run.py\n  config.py\n  requirements.txt\n  Procfile</code></pre>\n      </div>\n<br>\n<p>Inside your <em>Procfile</em>, add the following code:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">web: gunicorn: run:app</code></pre>\n      </div>\n<br>\n<p>First, <code class="language-text">web</code> defines our process — this tells our <code class="language-text">dyno</code> that we want a web-server. Second, we pass <code class="language-text">run:app</code> to <code class="language-text">gunicorn</code> to start our server, where <code class="language-text">run</code> refers to <em>run.py</em> and <code class="language-text">app</code> refers to the <code class="language-text">app</code> we\'ve created, i.e., the one imported in <em>run.py</em>.</p>\n<p>Now that our serve is in place, let\'s  configure our environment variables.</p>\n<h3>heroku config</h3>\n<p>You can configure environment variables in two ways with Heroku:</p>\n<ol>\n<li>Through the Heroku dashboard on their site</li>\n<li>Through the <code class="language-text">Heroku CLI</code></li>\n</ol>\n<p>Since this is a programming tutorial, we\'ll be using the CLI to configure the two environment variables used in this application. Also, Heroku has a really cool CLI.</p>\n<p>Run the following in the terminal:</p>\n<div class="gatsby-highlight" data-language="commandline">\n      <pre class="language-commandline"><code class="language-commandline">(flaskenv) C:\\api-app\\&gt;heroku config:set FLASK__APP=run.py\n...\n(flaskenv) C:\\api-app\\&gt;heroku config:set API_KEY=&lt;YOUR_API_KEY&gt;</code></pre>\n      </div>\n<br>\n<h3>git push heroku master</h3>\n<p>Now comes the moment of truth — pushing your <code class="language-text">master</code> branch to Heroku. Two item checklist before pushing to Heroku:</p>\n<ol>\n<li>\n<p>Make sure all necessary packages are in your <em>requirements.txt</em> file:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">(flaskenv) C:\\api-app\\&gt; pip freeze &gt; requirements.txt</code></pre>\n      </div>\n<br>\n</li>\n<li>Make sure your <code class="language-text">master</code> branch is up to date.</li>\n</ol>\n<p>And that\'s about it. If you\'ve done those two things, then you\'re ready to push to Heroku:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">(flaskenv) C:\\api-app\\&gt;git push heroku master</code></pre>\n      </div>\n<br>\n<p>You should see some command-line output, followed by <code class="language-text">Verifying deploy... done.</code></p>\n<p>Now open your app and see your data:</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">(flaskenv) C:\\api-app\\&gt;heroku open</code></pre>\n      </div>\n<br>\n<p>When the site opens in your browser, you should see your JSON.</p>\n<p>And that\'s about it. When you\'re ready to show your app to people you can upgrade your plan and the server won\'t turn off after thirty-minutes.</p>\n<h2>CORS</h2>\n<hr>\n<p>Now you are able to access your data by making fetch requests to your Heroku app. Sadly, as our app stands, other\'s will also be able to make ajax to your API. To prevent this from happening, we will be implementing CORS.</p>\n<p>Here is a definition from <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">MDN\'s article on CORS</a>:</p>\n<blockquote>\n<p>Cross-Origin Resource Sharing (CORS) is a mechanism that uses additional HTTP headers to tell a browser to let a web application running at one origin (domain) have permission to access selected resources from a server at a different origin. A web application makes a cross-origin HTTP request when it requests a resource that has a different origin (domain, protocol, and port) than its own origin.</p>\n</blockquote>\n<p>For our purposes, we will only be focusing one part of CORS — <code class="language-text">Access-Control-Allow-Origin</code></p>\n<p>The <code class="language-text">Access-Control-Allow-Origin</code> is configured in our Flask app and instructs the app which "origins" to provide access to. Here the origin is the domain of the client making the request. </p>\n<h3>Flask-CORS</h3>\n<p>We\'ll use <a href="https://flask-cors.readthedocs.io/en/latest/">Flask-CORS</a> to configure CORS for our Flask app.</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="language-text"><code class="language-text">(flaskenv) C:\\api-app\\&gt; pip install flask-cors\n...\n(flaskenv) C:\\api-app\\&gt; pip freeze &gt; requirements.txt</code></pre>\n      </div>\n<br>\n<p>Now make the following modifications to <em>app/__init__.py</em>, replacing the URLs in the <code class="language-text">origins</code> list with your own.</p>\n<div class="gatsby-highlight" data-language="python">\n      <pre class="language-python"><code class="language-python"><span class="token keyword">from</span> flask <span class="token keyword">import</span> Flask\n<span class="token keyword">from</span> flask_cors <span class="token keyword">import</span> CORS\n\napp <span class="token operator">=</span> Flask<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>\nCORS<span class="token punctuation">(</span>app<span class="token punctuation">,</span> origins<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">"https://yoururl.com"</span><span class="token punctuation">,</span> <span class="token string">"https://www.yoururl.com"</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n\n<span class="token keyword">from</span> app <span class="token keyword">import</span> routes</code></pre>\n      </div>\n<br>\n<p>Now only the domain of your frontend application will be able to make ajax requests to your heroku app. <code class="language-text">origins</code> can be a string or a list, so configure it accordingly. Make sure you include <code class="language-text">https://</code> or <code class="language-text">http://</code> and include both your naked and <code class="language-text">www</code> domains, or else you will get a CORS error. There is a fair-amount to CORS, so I encourage you to do some more research on the topic.</p>\n<h2>Conclusion</h2>\n<p>By implementing an app such as this you demonstrate you\'re a front-end developer who is security conscious, which is important. This tutorial may have either scared you or excited you about backend workflows, but now your API is safe and that\'s important.   </p>\n<p>As for me, this blog took a very long time to write so I\'m going to relax and work on a front-end blog.</p>',
frontmatter:{path:"/10-7-18",title:"Hide Your Keys, Folks (Part II)",tags:["Python","virtual environments","pip","Requests"]}}},pathContext:{}}}});
//# sourceMappingURL=path---10-7-18-2b369357c60b72d56216.js.map