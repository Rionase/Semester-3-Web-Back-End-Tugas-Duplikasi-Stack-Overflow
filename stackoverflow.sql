-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 29, 2023 at 05:35 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `stackoverflow`
--

-- --------------------------------------------------------

--
-- Table structure for table `answers`
--

CREATE TABLE `answers` (
  `id` int(11) NOT NULL,
  `id_question` int(11) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `answer` varchar(10000) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `answers`
--

INSERT INTO `answers` (`id`, `id_question`, `id_user`, `answer`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, '<pre class=\"s-code-block markdown\"><code>I think you should just use the built in </code></pre>', '2023-01-29 15:31:42', '2023-01-29 15:31:42'),
(2, 4, 1, '<pre class=\"s-code-block markdown\"><code>I\'ve seen it done in a kind of iffy, but pretty reliable way. Basically, an element is set to use a specific font and a string is set to that element. If the font set for the element does not exist, it takes the font of the parent element. So, what they do is measure the width of the rendered string. If it matches what they expected for the desired font as opposed to the derived font, it\'s present. This won\'t work for monospaced fonts.<br class=\"ProseMirror-trailingBreak\"></code></pre>', '2023-01-29 15:32:53', '2023-01-29 15:32:53'),
(3, 4, 1, '<pre class=\"s-code-block markdown\"><code><div class=\"s-prose js-post-body\" itemprop=\"text\" style=\"margin-bottom: 0px; line-height: var(--_pr-lh); font-family: var(--theme-post-body-font-family); font-size: var(--_pr-fs); --_pr-fs:calc(var(--su-static16) - var(--su-static1)); --_pr-lh:1.5; --_pr-blockquote-ml:1em; --_pr-blockquote-mt:0; --_pr-blockquote-before-bg:var(--black-150); --_pr-code-fs:var(--fs-body1); --_pr-h1-fs:var(--fs-headline1); --_pr-h2-fs:var(--fs-title); --_pr-h3-fs:var(--fs-subheading); --_pr-h4-fs:var(--fs-body3); --_pr-h5-fs:var(--fs-body2); --_pr-h6-fs:var(--fs-body1); --_pr-hr-bg:var(--black-100); --_pr-img-mb:1.1em; --_pr-kbd-bc:var(--black-300); --_pr-kbd-bs:0 var(--su-static1) var(--su-static1) hsla(210,8%,5%,0.15), inset 0 1px 0 0 hsl(0, 0%, 100%); --_pr-spoiler-cursor:pointer; --_pr-spoiler-after-t:1em; --_pr-soiler-after-o: unset; --_pr-soiler-child-o:0; --_pr-soiler-child-visibility:hidden; --s-prose-spacing:1.1em; --s-prose-spacing-condensed:calc(1.1em / 2); width: 659px;\"><p style=\"font-size: 15px; --_pr-img-mb:0;\">I wrote a simple JavaScript tool that you can use it to check if a font is installed or not. \\n \\n <br>It uses simple technique and should be correct most of the time. \\n \\n <br></p><p style=\"font-size: 15px; --_pr-img-mb:0;\"><strong style=\"font-size: 15px;\"><a href=\"https://github.com/derek1906/jFont-Checker/\" rel=\"noreferrer\" style=\"font-size: 15px;\">jFont Checker</a></strong>&nbsp;on github</p></div><div class=\"mt24\" style=\"font-size: 13px; margin-top: var(--su24)  !important;\"><div class=\"d-flex fw-wrap ai-start jc-end gs8 gsy\" style=\"font-size: 13px;\"><time itemprop=\"dateCreated\" datetime=\"2011-05-21T17:58:10\" style=\"font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI Adjusted&quot;, &quot;Segoe UI&quot;, &quot;Liberation Sans&quot;, sans-serif; font-size: 13px; color: rgb(35, 38, 41); white-space: normal;\"></time><div class=\"flex--item mr16\" style=\"font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI Adjusted&quot;, &quot;Segoe UI&quot;, &quot;Liberation Sans&quot;, sans-serif; font-size: 13px; color: rgb(35, 38, 41); white-space: normal; flex: 1 1 100px;\"><div class=\"js-post-menu pt2\" data-post-id=\"6083463\" style=\"font-size: 13px; padding-top: var(--su2)  !important;\"><div class=\"d-flex gs8 s-anchors s-anchors__muted fw-wrap\" style=\"margin: calc(var(--su8) / 2 * -1); font-size: 13px;\"></div></div></div></div></div></code></pre>', '2023-01-29 15:33:56', '2023-01-29 15:33:56'),
(4, 8, 3, '<pre class=\"s-code-block markdown\"><code>I have to agree with the OP \'wrong\' dates really jar with my DD/MM/YYYY upbringing and I find ISO 8601 dates and times extremely easy to work with. For once the standard got it right and engtech has the obvious answer that doesn\'t require localisation. \\n \\n \n\nI was going to report the birthday input form on stack overflow as a bug because of how much of a sore thumb it is to the majority of the world.<br class=\"ProseMirror-trailingBreak\"></code></pre>', '2023-01-29 15:37:40', '2023-01-29 15:37:40'),
(5, 5, 3, '<pre class=\"s-code-block markdown\"><code><p style=\"font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI Adjusted&quot;, &quot;Segoe UI&quot;, &quot;Liberation Sans&quot;, sans-serif; font-size: 15px; --_pr-img-mb:0; color: rgb(35, 38, 41); white-space: normal;\">If you expect infrequent collisions,&nbsp;<a href=\"http://msdn.microsoft.com/en-us/library/aa0416cz.aspx\" rel=\"noreferrer\" style=\"font-size: 15px; cursor: pointer;\">Optimistic Concurrency</a>&nbsp;is probably your best bet. \\n \\n&nbsp;</p><p style=\"font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI Adjusted&quot;, &quot;Segoe UI&quot;, &quot;Liberation Sans&quot;, sans-serif; font-size: 15px; --_pr-img-mb:0; color: rgb(35, 38, 41); white-space: normal;\">Scott Mitchell wrote a comprehensive tutorial on implementing that pattern: \\n \\n&nbsp;<br><a href=\"http://www.asp.net/Learn/data-access/tutorial-21-cs.aspx\" rel=\"noreferrer\" style=\"font-size: 15px; cursor: pointer;\">Implementing Optimistic Concurrency</a></p></code></pre>', '2023-01-29 15:39:52', '2023-01-29 15:39:52'),
(6, 2, 3, '<pre class=\"s-code-block markdown\"><code>This is not good enought, if set the lock=true, if the application or the browser is crash, then , the record is dead lock forever<br class=\"ProseMirror-trailingBreak\"></code></pre>', '2023-01-29 15:41:12', '2023-01-29 15:41:12'),
(7, 3, 3, '<pre class=\"s-code-block markdown\"><code><p style=\"font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI Adjusted&quot;, &quot;Segoe UI&quot;, &quot;Liberation Sans&quot;, sans-serif; font-size: 15px; --_pr-img-mb:0; color: rgb(35, 38, 41); white-space: normal;\">Of course, when you have&nbsp;<em style=\"font-size: 15px;\">lots</em>&nbsp;of top left corners then this solution devolves. \\n \\n&nbsp;</p><p style=\"font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI Adjusted&quot;, &quot;Segoe UI&quot;, &quot;Liberation Sans&quot;, sans-serif; font-size: 15px; --_pr-img-mb:0; color: rgb(35, 38, 41); white-space: normal;\">I\'m pretty sure this problem is Ω(n²), because you have to calculate the sums for each M[i,j] -- unless someone has a better algorithm for the summation :)</p></code></pre>', '2023-01-29 15:42:26', '2023-01-29 15:42:26'),
(8, 6, 4, '<pre class=\"s-code-block markdown\"><code><p style=\"font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI Adjusted&quot;, &quot;Segoe UI&quot;, &quot;Liberation Sans&quot;, sans-serif; font-size: 15px; --_pr-img-mb:0; color: rgb(35, 38, 41); white-space: normal;\">Of course, when you have&nbsp;<em style=\"font-size: 15px;\">lots</em>&nbsp;of top left corners then this solution devolves.</p></code></pre>', '2023-01-29 15:43:30', '2023-01-29 15:43:30'),
(9, 7, 4, '<pre class=\"s-code-block markdown\"><code>You can solve this with a program exactly the same way you  \\n \\n solve it by hand (with multiplication and subtraction, then feeding results back into the equations). \\n  This is pretty standard secondary-school-level mathematics.<br class=\"ProseMirror-trailingBreak\"></code></pre>', '2023-01-29 15:44:10', '2023-01-29 15:44:10'),
(10, 9, 4, '<pre class=\"s-code-block markdown\"><code>In terms of run-time efficiency, \\n \\n others have answered better than I. If you always will have the same number of equations as variables, \\n \\n  I like Cramer\'s rule as it\'s easy to implement. Just write a function to calculate determinant of a matrix (or use one that\'s already written, I\'m sure you can find one out there), and divide the determinants of two matrices.<br class=\"ProseMirror-trailingBreak\"></code></pre>', '2023-01-29 15:45:10', '2023-01-29 15:45:10'),
(11, 11, 7, '<pre class=\"s-code-block markdown\"><code>From the wording of your question, \\n  it seems like you have more equations than unknowns and you want to minimize the inconsistencies. \\n This is typically done with linear regression, \\n which minimizes the sum of the squares of the inconsistencies.<br class=\"ProseMirror-trailingBreak\"></code></pre>', '2023-01-29 15:46:08', '2023-01-29 15:46:08');

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `id_question` int(11) NOT NULL,
  `id_user` int(11) DEFAULT NULL,
  `title` varchar(1000) DEFAULT NULL,
  `question` varchar(10000) DEFAULT NULL,
  `tags` varchar(1000) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`id_question`, `id_user`, `title`, `question`, `tags`, `createdAt`, `updatedAt`) VALUES
(1, 2, 'React: disable incorrect input to MUI DatePicker', '<pre class=\"s-code-block markdown\"><code>Is there a way to prevent a user to type a wrong input into MUI DatePicker, e.g., \"sometextwhichisnotdatetime\". Ideally I\'d like the field either to be empty or in a format \"yyyy-MM-dd HH:mm\" (or a part of it, if a user is in the process of entering the date/time). \\n \\n \n\nI am trying the following code, which does not seem to work<br class=\"ProseMirror-trailingBreak\"></code></pre><pre class=\"s-code-block markdown\"><code><br></code></pre><pre class=\"s-code-block markdown\"><code><span class=\"hljs-symbol\">```</span><br><span class=\"hljs-code\">&lt;DateTimePicker\n \\t inputFormat=\"yyyy-MM-dd HH:mm\"\n \\t mask=\"____:__:__ __:__\"\n \\t  ampm={false}\n \\t  disableMaskedInput={false}\n \\t  ...\n/&gt;</span><br><span class=\"hljs-symbol\">```</span></code></pre>', 'reactjs', '2023-01-29 15:04:15', '2023-01-29 15:04:15'),
(2, 7, 'find the graph in the network where the clicked node belongs to in vispy', '<pre class=\"s-code-block markdown\"><code><p style=\"font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI Adjusted&quot;, &quot;Segoe UI&quot;, &quot;Liberation Sans&quot;, sans-serif; font-size: 15px; --_pr-img-mb:0; color: rgb(35, 38, 41); white-space: normal;\">I\'d like code to show, when I click on the node of a graph network it highlights the graph that the node belongs to in vispy</p><p style=\"margin-bottom: 1.1em; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; font-family: -apple-system, BlinkMacSystemFont, &quot;Segoe UI Adjusted&quot;, &quot;Segoe UI&quot;, &quot;Liberation Sans&quot;, sans-serif; font-size: 15px; --_pr-img-mb:0; color: rgb(35, 38, 41); white-space: normal;\">I tried this code but the node doesn\'t get colored nor the neighbored nodes&nbsp;</p></code> \\n  \\n </pre><pre class=\"s-code-block markdown\"><br></pre><pre class=\"s-code-block markdown\"><code><span class=\"hljs-symbol\">```</span><br>def on_node_clicked(self, event):\n \\t if event.button == 1:\n\n \\t # Get the node that was clicked on and its index in the graph\'s list of nodes\n \\t node = event.pos\n\n# Highlight all edges connected to this node by setting their widths to 5\nfor edge in self.edges:\n\n \\t if edge[0] == node or edge[1] == node:\n        edge[2].width = 5\n\nself.canvas.update()\n\n# Connect the callback function to the \'node_clicked\' event of the graph object\n\nself.events.node_clicked.connect(self.on_node_clicked)\n\n# Show the canvas with all of its elements\nself.canvas.show(<br><span class=\"hljs-symbol\">```</span></code></pre>', 'python', '2023-01-29 15:13:15', '2023-01-29 15:13:15'),
(3, 7, 'Accidently deleted all my jupyter notebook data still showing data in jupyter Variables', '<pre class=\"s-code-block markdown\"><code>Hi i accidentelly deleted my jupyterlab notebook data i was trying to save the data from ipynb into csv format I used the command: <br class=\"ProseMirror-trailingBreak\"></code> \\n  \\n </pre><pre class=\"s-code-block markdown\"><code><span class=\"hljs-symbol\">```</span><br><span class=\"hljs-code\">path = (\'F:\\jupyter Lab Projects\\Automotive residual value.ipynb\')\ndf.to_csv(path)</span><br><span class=\"hljs-symbol\">```</span></code></pre>', 'python jupiter_notebook', '2023-01-29 15:14:49', '2023-01-29 15:14:49'),
(4, 6, 'How to detect which one of the defined font was used in a web page?', '<pre class=\"s-code-block markdown\"><code><br class=\"ProseMirror-trailingBreak\"></code></pre><pre class=\"s-code-block markdown\"><code><span class=\"hljs-symbol\">```</span><br><span class=\"hljs-code\">body {\nfont-family: Calibri, Trebuchet MS, Helvetica, sans-serif;\n}</span><br><span class=\"hljs-symbol\">```</span></code></pre><pre class=\"s-code-block markdown\"><code><span class=\"hljs-symbol\">How could I detect which one of the defined fonts were used in the user\'s browser?\n\nFor people wondering why I want to do this is because the font I\'m detecting contains glyphs that are not available in other fonts. If the user does not have the font, then I want it to display a link asking the user to download that font (so they can use my web application with the correct font). <br></span></code></pre>', 'javascript', '2023-01-29 15:21:42', '2023-01-29 15:21:42'),
(5, 6, 'Editing database records by multiple users', '<pre class=\"s-code-block markdown\"><code>\n\nI have designed database tables (normalised, on an MS SQL server) and created a standalone windows front end for an application that will be used by a handful of users to add and edit information. We will add a web interface to allow searching accross our production area at a later date. \\n \\n \n\nI am concerned that if two users start editing the same record then the last to commit the update would be the \'winner\' and important information may be lost. A number of solutions come to mind but I\'m not sure if I am going to create a bigger headache. \\n \\n \n\nDo nothing and hope that two users are never going to be editing the same record at the same time. - Might never happed but what if it does?\n<br class=\"ProseMirror-trailingBreak\"></code></pre>', 'mysql', '2023-01-29 15:23:16', '2023-01-29 15:23:16'),
(6, 6, 'Visual Studio Setup Project - Per User Registry Settings', '<pre class=\"s-code-block markdown\"><code>I\'m trying to maintain a Setup Project in Visual Studio 2003 (yes, it\'s a legacy application). The problem we have at the moment is that we need to write registry entries to HKCU for every user on the computer. They need to be in the HKCU rather than HKLM because they are the default user settings, and they do change per user. My feeling is that \\n \\n \n\nThis isn\'t possible\nThis isn\'t something the installer should be doing, but something the application should be doing (after all what happens when a user profile is created after the install?).<br class=\"ProseMirror-trailingBreak\"></code></pre>', 'windows vscode', '2023-01-29 15:24:50', '2023-01-29 15:24:50'),
(7, 6, 'Solving a linear equation', '<pre class=\"s-code-block markdown\"><code>I need to programmatically solve a system of linear equations in C, Objective C, or (if needed) C++. \\n \n\nHere\'s an example of the equations: \\n \n\n-44.3940 = a * 50.0 + b * 37.0 + tx \\n \n-45.3049 = a * 43.0 + b * 39.0 + tx \\n \n-44.9594 = a * 52.0 + b * 41.0 + tx \\n \nFrom this, I\'d like to get the best approximation for a, b, and tx.<br class=\"ProseMirror-trailingBreak\"></code></pre>', 'math system', '2023-01-29 15:26:17', '2023-01-29 15:26:17'),
(8, 2, 'Localising date format descriptors', '<pre class=\"s-code-block markdown\"><code>What is the best way to localise a date format descriptor? \\n \\n \n\nAs anyone from a culture which does not use the mm/dd/yyyy format knows, it is annoying to have to enter dates in this format. The .NET framework provides some very good localisation support, so it\'s trivial to parse dates according to the users culture, but you often want to also display a helpful hint as to the format required (especially to distinguish between yy and yyyy which is interchangeable in most cultures). \\n \\n \n\nWhat is the best way to do this in a way that make sense to most users (e.g. dd/M/yyy is confusing because of the change in case and the switching between one and two letters).<br class=\"ProseMirror-trailingBreak\"></code></pre>', 'date .net', '2023-01-29 15:28:34', '2023-01-29 15:28:34'),
(9, 1, 'How to create a new object instance from a Type', '<pre class=\"s-code-block markdown\"><code>One may not always know the Type of an object at compile-time, but may need to create an instance of the Type. \\n \\n \n\nHow do you get a new object instance from a Type?<br class=\"ProseMirror-trailingBreak\"></code></pre>', '#c', '2023-01-29 15:31:09', '2023-01-29 15:31:09'),
(10, 1, 'ASP, need to use SFTP', '<pre class=\"s-code-block markdown\"><code>This is ASP classic, not .Net. We have to get a way to SFTP into a server to upload and download a couple of files, kicked off by a user. \\n \\n \n\nWhat have other people used to do SFTP in ASP classic? Not necessarily opposed to purchasing a control.<br class=\"ProseMirror-trailingBreak\"></code></pre>', 'sftp asp-classic', '2023-01-29 15:35:28', '2023-01-29 15:35:28'),
(11, 3, 'Python and MySQL', '<pre class=\"s-code-block markdown\"><code>I can get Python to work with Postgresql but I cannot get it to work with MySQL. The main problem is that on the shared hosting account I have I do not have the ability to install things such as Django or PySQL, I generally fail when installing them on my computer so maybe it\'s good I can\'t install on the host. \\n \\n \n\nI found bpgsql really good because it does not require an install, it\'s a single file that I can look at, read and then call the functions of. Does anybody know of something like this for MySQL?<br class=\"ProseMirror-trailingBreak\"></code></pre>', 'python mysql', '2023-01-29 15:36:55', '2023-01-29 15:36:55');

-- --------------------------------------------------------

--
-- Table structure for table `question_votes`
--

CREATE TABLE `question_votes` (
  `id_question` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `status` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `question_votes`
--

INSERT INTO `question_votes` (`id_question`, `id_user`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 6, 'Votes Up', '2023-01-29 15:23:30', '2023-01-29 16:20:05'),
(1, 7, 'Votes Up', '2023-01-29 15:17:29', '2023-01-29 15:46:36'),
(2, 2, 'Votes Up', '2023-01-29 15:28:40', '2023-01-29 15:28:40'),
(2, 3, 'Votes Up', '2023-01-29 15:37:01', '2023-01-29 15:37:01'),
(2, 6, 'Votes Up', '2023-01-29 15:48:09', '2023-01-29 15:48:09'),
(3, 6, 'Votes Up', '2023-01-29 15:23:35', '2023-01-29 15:23:35'),
(4, 2, 'Votes Up', '2023-01-29 15:28:45', '2023-01-29 15:28:45'),
(4, 3, 'Votes Up', '2023-01-29 15:38:48', '2023-01-29 15:38:48'),
(4, 7, 'Votes Up', '2023-01-29 15:47:11', '2023-01-29 15:47:11'),
(5, 2, 'Votes Down', '2023-01-29 15:28:48', '2023-01-29 15:28:48'),
(5, 7, 'Votes Down', '2023-01-29 15:47:16', '2023-01-29 15:47:16'),
(6, 7, 'Votes Down', '2023-01-29 15:47:25', '2023-01-29 15:47:25'),
(7, 7, 'Votes Up', '2023-01-29 15:47:32', '2023-01-29 15:47:32'),
(8, 7, 'Votes Up', '2023-01-29 15:47:36', '2023-01-29 15:47:36'),
(9, 7, 'Votes Down', '2023-01-29 15:47:41', '2023-01-29 15:47:41'),
(10, 7, 'Votes Up', '2023-01-29 15:46:26', '2023-01-29 15:47:45'),
(11, 6, 'Votes Down', '2023-01-29 15:48:22', '2023-01-29 15:48:22'),
(11, 7, 'Votes Down', '2023-01-29 15:46:12', '2023-01-29 15:46:12');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `display_name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `display_name`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'Andi@gmail.com', 'Andi', '677d9cee0bfaab37f7735997a277bc20', '2023-01-27 18:46:42', '2023-01-27 18:46:42'),
(2, 'Budi@gmail.com', 'Budi', '819ff8a2cb0ffdb89220fe06e1d352f6', '2023-01-27 19:12:49', '2023-01-27 19:12:49'),
(3, 'Cici@gmail.com', 'Cici', '072b61aad020d91c0102cca6d7e31269', '2023-01-27 19:22:40', '2023-01-27 19:22:40'),
(4, 'Doni@gmail.com', 'Doni', '559b1fc32e9511fac05ba036367efd09', '2023-01-27 19:27:55', '2023-01-27 19:27:55'),
(5, 'Eko@gmail.com', 'Eko', '120c69cafba7e25fe8d155903be15bb6', '2023-01-27 20:40:16', '2023-01-27 20:40:16'),
(6, 'cheris@gmail.com', 'cheris', 'e1a0963489628c013bb8886f560317d3', '2023-01-29 15:09:12', '2023-01-29 15:09:12'),
(7, 'Nicholas@gmail.com', 'Nicholas', 'f59d96306d7f5ce458912dcba6aa71b7', '2023-01-29 15:09:47', '2023-01-29 15:09:47');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `answers`
--
ALTER TABLE `answers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_question` (`id_question`),
  ADD KEY `id_user` (`id_user`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id_question`),
  ADD KEY `id_user` (`id_user`);

--
-- Indexes for table `question_votes`
--
ALTER TABLE `question_votes`
  ADD PRIMARY KEY (`id_question`,`id_user`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `answers`
--
ALTER TABLE `answers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `id_question` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `answers`
--
ALTER TABLE `answers`
  ADD CONSTRAINT `answers_ibfk_1` FOREIGN KEY (`id_question`) REFERENCES `questions` (`id_question`),
  ADD CONSTRAINT `answers_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`);

--
-- Constraints for table `questions`
--
ALTER TABLE `questions`
  ADD CONSTRAINT `questions_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
