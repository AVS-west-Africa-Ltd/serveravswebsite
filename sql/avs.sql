-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 14, 2025 at 12:19 PM
-- Server version: 10.6.20-MariaDB-cll-lve-log
-- PHP Version: 8.3.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `onthelbo_avswebsite`
--

-- --------------------------------------------------------

--
-- Table structure for table `LandingPages`
--

CREATE TABLE `LandingPages` (
  `id` int(11) NOT NULL,
  `description` text NOT NULL,
  `title` varchar(255) NOT NULL,
  `bgImage` varchar(255) NOT NULL,
  `textColor` varchar(255) NOT NULL,
  `about` text DEFAULT NULL,
  `about2` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `LandingPages`
--

INSERT INTO `LandingPages` (`id`, `description`, `title`, `bgImage`, `textColor`, `about`, `about2`, `createdAt`, `updatedAt`) VALUES
(1, 'Welcome  to A Venture Studio — your bridge to expertise for turning ideas into thriving businesses. We don\'t just understand your vision; we champion it. With a deep commitment to your success, we provide strategic guidance and empowerment to fuel the growth of your business.', 'Ready to start your Adventure? ', '', '', 'At our core, we specialise in tailored support for strategic planning, investment, and advisory services. What sets us apart is our curated network of technical and digital implementation partners, sourced organically to ensure your projects are in the hands of the most capable professionals.', 'We\'re not just a studio; we\'re your ally, passionately invested in the realisation of your projects, the success of your business, and the achievement of your goals. Let\'s embark on this journey together, where expertise meets empathy, and innovation meets unwavering support.', '2024-12-18 00:08:18', '2024-12-24 03:52:21');

-- --------------------------------------------------------

--
-- Table structure for table `Services`
--

CREATE TABLE `Services` (
  `id` int(11) NOT NULL,
  `link` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `title` varchar(255) NOT NULL,
  `bgImage` varchar(255) NOT NULL,
  `subTitle` varchar(255) NOT NULL,
  `subDescription` varchar(255) NOT NULL,
  `subHeroTitle` varchar(255) NOT NULL,
  `subHeroButtonText` varchar(255) NOT NULL,
  `whoTitle` varchar(255) NOT NULL,
  `whoDescription` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`whoDescription`)),
  `whoButton` varchar(255) NOT NULL,
  `contactTitle` varchar(255) NOT NULL,
  `contactSubTitle` varchar(255) NOT NULL,
  `textColor` varchar(255) NOT NULL,
  `promoteTitle` varchar(255) NOT NULL,
  `promoteDescription` varchar(255) NOT NULL,
  `promoteImage` varchar(255) NOT NULL,
  `stepHeroTitle` varchar(255) NOT NULL,
  `stepHeroDescription` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `landingId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `Services`
--

INSERT INTO `Services` (`id`, `link`, `description`, `title`, `bgImage`, `subTitle`, `subDescription`, `subHeroTitle`, `subHeroButtonText`, `whoTitle`, `whoDescription`, `whoButton`, `contactTitle`, `contactSubTitle`, `textColor`, `promoteTitle`, `promoteDescription`, `promoteImage`, `stepHeroTitle`, `stepHeroDescription`, `createdAt`, `updatedAt`, `landingId`) VALUES
(1, '/partnership', '', 'Strategy, Partnerships & Advisory', 'https://res.cloudinary.com/duymaqvs4/image/upload/v1734536253/hero_joq2mv.png', 'Your Journey, Our Expert Support; Navigating Entrepreneurship with Ease ', 'We can help you build an agile leadership team, and help you become more flexible in assembling a collective of experts that allow you to scale and grow your business.', 'The right people at the right time.', 'Let’s  Connect Now!', 'We are more than just a network of experts.', '[\"We are a collective of experts who strategically work with you to identify your needs, guiding you towards your next big business growth engagement and scaling your ideas for long-term success.\",\"Our ability to deeply understand projects sets us apart, allowing us to empower companies with the skills and knowledge needed to thrive. Leveraging our extensive network, we connect businesses with tailored support to ensure they achieve their goals.\",\"Together, we empower you to find the pathway forward, curating your thoughts, ideas, plans, and materials into success stories and building blocks. Our approach is focused on the present moment, working with what\'s in front of us here and now to drive tangible results\"]', '', '', '', '', 'Through Technology, Digital activation and product Conceptulisation!', 'Our diverse set of partners and advisors provide a wide range of industry expertise and thought leadership to help you thrive in the fast paced world of innovation and entrepreneurship.', 'https://res.cloudinary.com/duymaqvs4/image/upload/v1734536087/promote_mozyca.png', 'Never miss an opportunity to breathe fresh life into your business.', 'Connect with us now to gain exclusive access to the wealth of knowledge within our expert network.', '2024-12-18 00:14:44', '2024-12-24 04:00:29', 1),
(2, '/digital', '', 'Brand & Digital Activation', 'https://res.cloudinary.com/duymaqvs4/image/upload/v1734536635/hero_h0aa13.png', 'Your Brand, It’s Exposure; Reaching the Right Audience With the Best Message.com', 'Our network will ensure you increase MRR through exposure on the best digital means, putting your brand in front of eyeballs and that increases the value of your business, with purchase habits, analytics and tangible ROI insights', 'The right people at the right time.', 'Let’s Connect Now!', 'We are more than just a network of agencies.', '[\"At the heart of our studio values is not just a network of agencies, but a dynamic collective of digital activation experts. We strategically collaborate with you to pinpoint your brand\'s needs, propelling you towards your next significant business breakthrough and amplifying your ideas for lasting success. \",\"Our strength lies in our profound understanding of projects, enabling us to equip companies with the precise skills and knowledge needed to flourish in the digital space. Harnessing our extensive network, we tailor support to connect businesses with bespoke solutions, ensuring they exceed their objectives.\",\"Together, we empower you to chart a course forward, transforming your thoughts, ideas and plans into compelling narratives and strategic assets. Grounded in the present, we leverage what\'s before us to deliver tangible outcomes that elevate your brand in the digital landscape.\"]', '', '', '', '', 'Your product\'s success hinges on effective branding and activation strategies. Invest your budget wisely.', 'With our tailored expertise, we ensure every penny spent drives impactful brand activation, propelling your product towards success in today\'s competitive market.  Utilise the platforms that will work best for your business and maximise your brand\'s reach', 'https://res.cloudinary.com/duymaqvs4/image/upload/v1734536477/promote_bcmufq.png', 'Never miss an opportunity to breathe fresh life into your business.', 'Connect with us now to gain exclusive access to the wealth of knowledge within our expert network.', '2024-12-18 00:17:59', '2024-12-24 03:56:44', 1),
(3, '/technical', '', 'Technical Activation', 'https://res.cloudinary.com/duymaqvs4/image/upload/v1734536893/hero_ekalzn.png', 'Put your technology dependencies behind you and utilise the power of our studio expertise.', 'Embrace a new approach by shifting focus from technology dependencies, and instead, leverage the expertise of our studio to drive innovative solutions and user-centred enhancements. By tapping into our studio\'s wealth of knowledge and creative talent, you', 'The right people at the right time.', 'Let’s Connect Now!', 'We are more than just a network of agencies.', '[\"At the heart of A Venture Studio lies our Technical Activation, a dedicated group of experts committed to transforming your technology aspirations into tangible outcomes. We understand that in a world increasingly driven by digital innovation, the success of your projects hinges not just on the technologies you use, but on the people behind them.\",\"Our team consists of seasoned technologists, strategists, and creative thinkers who excel at bridging the gap between complex technical requirements and strategic business goals. We pride ourselves on being at the forefront of the technology curve, equipped with the latest insights and skills to propel your projects forward.\",\"Our approach is simple yet powerful: we prioritise user-centric enhancements and innovative solutions over mere technological dependency. This means we don’t just help you implement technology; we leverage it to create meaningful experiences that resonate with users and drive business success.\",\"By partnering with us, you tap into a pool of expertise that is agile, knowledgeable, and deeply invested in your success. We are not just implementers; we are enablers of your vision, ensuring that every technical aspect of your project aligns perfectly with your strategic objectives.\",\"Join us at A Venture Studio, where your technical challenges meet our innovative solutions, and together, we set the stage for a future defined by growth, excellence, and technological empowerment.\"]', '', '', '', '', 'Empowering Your Vision: Where Expertise Meets Innovation in Technical Activation', 'Discover the difference with A Venture Studio\'s Technical Activation team, where expert knowledge and innovative thinking converge to transform your technological ambitions into reality. We\'re not just your service providers; we\'re your partners in drivin', 'https://res.cloudinary.com/duymaqvs4/image/upload/v1734536849/promote_no2egd.png', 'Never miss an opportunity to breathe fresh life into your business.', 'Connect with us now to gain exclusive access to the wealth of knowledge within our expert network.', '2024-12-18 00:20:33', '2024-12-18 16:10:42', 1);

-- --------------------------------------------------------

--
-- Table structure for table `Steps`
--

CREATE TABLE `Steps` (
  `id` int(11) NOT NULL,
  `description` text NOT NULL,
  `title` varchar(255) NOT NULL,
  `btnText` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `serviceId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `Steps`
--

INSERT INTO `Steps` (`id`, `description`, `title`, `btnText`, `link`, `createdAt`, `updatedAt`, `serviceId`) VALUES
(1, 'Reach out to us with your project brief and ideas.', 'Connect and Share', 'Let\'s Connect Now!', '/contact', '2024-12-18 01:09:09', '2024-12-18 07:25:29', 1),
(2, 'We carefully examine your feedback and thoughts to ensure they align with your goals.', 'Review and Refine', 'Let\'s Start!', '/contact', '2024-12-18 01:10:36', '2024-12-18 01:10:36', 1),
(3, 'We\'ll discuss your reflections and present tailored next steps for your consideration.', 'Follow-up and Customise Your Path', 'Let\'s Start!', '/contact', '2024-12-18 01:11:19', '2024-12-18 07:26:44', 1),
(4, 'Once we\'ve understood the leadership team that suits your strategy and plan. We will introduce you with our experts and help bring your vision to life.', 'Connect with Our Expert Partners', 'Let\'s Start!', '/contact', '2024-12-18 01:11:53', '2024-12-18 01:11:53', 1),
(5, 'Reach out to us with your project brief and ideas.', 'Connect and Share', 'Let\'s Connect Now!', '/contact', '2024-12-18 01:13:54', '2024-12-18 01:13:54', 2),
(6, 'We carefully examine your feedback and thoughts to ensure they align with your goals.', 'Review and Refine', 'Let\'s Start', '/contact', '2024-12-18 01:14:42', '2024-12-18 01:14:42', 2),
(7, 'We\'ll discuss your reflections and present tailored next steps for your consideration.', 'Follow-up and Customise Your Path', 'Let\'s Start', '/contact', '2024-12-18 01:15:16', '2024-12-18 01:15:16', 2),
(8, 'Once we\'ve understood the leadership team that suits your strategy and plan. We will introduce you with our experts and help bring your vision to life.', 'Connect with Our Expert Partners', 'Let\'s Start', '/contact', '2024-12-18 01:15:45', '2024-12-18 01:15:45', 2),
(9, 'Reach out to us with your project brief and ideas.', 'Connect and Share', 'Let\'s Start', '/contact', '2024-12-18 01:17:39', '2024-12-18 01:17:39', 3),
(10, 'We carefully examine your feedback and thoughts to ensure they align with your goals.', 'Review and Refine', 'Let\'s Start', '/contact', '2024-12-18 01:18:20', '2024-12-18 01:18:20', 3),
(11, 'We\'ll discuss your reflections and present tailored next steps for your consideration.', 'Follow-up and Customise Your Path', 'Let\'s Start', '/contact', '2024-12-18 01:18:52', '2024-12-18 01:18:52', 3),
(12, 'Once we\'ve understood the leadership team that suits your strategy and plan. We will introduce you with our experts and help bring your vision to life.', 'Connect with Our Expert Partners', 'Let\'s Start', '/contact', '2024-12-18 01:19:34', '2024-12-18 01:19:34', 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `LandingPages`
--
ALTER TABLE `LandingPages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Services`
--
ALTER TABLE `Services`
  ADD PRIMARY KEY (`id`),
  ADD KEY `landingId` (`landingId`);

--
-- Indexes for table `Steps`
--
ALTER TABLE `Steps`
  ADD PRIMARY KEY (`id`),
  ADD KEY `serviceId` (`serviceId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `LandingPages`
--
ALTER TABLE `LandingPages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `Services`
--
ALTER TABLE `Services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `Steps`
--
ALTER TABLE `Steps`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Services`
--
ALTER TABLE `Services`
  ADD CONSTRAINT `Services_ibfk_1` FOREIGN KEY (`landingId`) REFERENCES `LandingPages` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `Steps`
--
ALTER TABLE `Steps`
  ADD CONSTRAINT `Steps_ibfk_1` FOREIGN KEY (`serviceId`) REFERENCES `Services` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
