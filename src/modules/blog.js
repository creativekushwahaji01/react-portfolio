import React from "react";
import '../App.css';
import BlogCard from "../blogimage/nft day.JPG";
import nft from "../blogimage/nft day.JPG"
import techfest from '../blogimage/techfest.jpg'
import webdev from "../blogimage/webdev.jpg" 
import techhuntress from "../blogimage/rechhuntress.jpg"
import bootcamp from "../blogimage/web3bootcamp.jpg" 
import w3bpl from "../blogimage/w3bpl1.jpg" 
import fastn2 from "../blogimage/fastn2.jpg" 
import fastn3 from "../blogimage/fastn3.jpg" 
import node from "../blogimage/nodejs1.png" 
import bplfoss from "../blogimage/bhopalfoss1.jpeg"
import solona from "../blogimage/solana1.jpg"

function Blog(){
    return(
        <div id="Blogs" className="blogmain">
        <div className="main">
          <BlogCard
            imageSrc={nft}
            title="NFT DAY Celebration"
            date="Wed, 20 Sept 2023"
            venue="D-Runch Bhopal"
            speakers="SPEAKER'S - Shouryam Kumar"
            description='🚀 Attended an inspiring event on September 20th: NFT Day organized by Shouryam Kumar at D Runch Restaurant!
          🌟

          I had the privilege of diving deep into the fascinating world of Non-Fungible Tokens (NFTs). It was a day
          filled with learning, networking, and incredible interactions with like-minded individuals.

          💡 Key Takeaways:
          🔹 Gained valuable insights into the NFT space.
          🔹 Networked with amazing people passionate about NFTs.
          🔹 Received fantastic goodies that added to the experience.
          🔹 Engaged in interactive activities that made learning even more enjoyable.

          Events like these remind me of the power of community and the importance of staying updated in the rapidly
          evolving world of blockchain and digital assets.

          Thank you, Shouryam Kumar and team , for organizing such a fantastic event! 🙌

          The punchline of the event made by Shouryam Kumar - " Bhopal ko Bangalore bana denge !! was 🔥'

          />
        </div>
        <div className="main">
          <BlogCard
            imageSrc={techfest}
            title="IIT Bombay Teckfest workshop"
            date="Wed, 13 Sept 2023"
            venue="UIT RGPV Bhopal"
            speakers="SPEAKER'S - From Robotecs' INDIA"
            description="Participating in IIT Bombay's Robotech workshop was an enlightening journey. Our team engineered a
            self-driving robotic car using advanced IR sensors. Days were filled with coding, designing, and
            troubleshooting as we fine-tuned our creation. Our robot showcased impressive precision, navigating complex
            terrains guided solely by IR sensors. The competition was fierce, with teams presenting their autonomous
            marvels. Tension mounted as we awaited the results, and our team's elation was immeasurable when we secured
            the first prize. This achievement highlighted our dedication and collaboration, a testament to the
            workshop's enriching experience. It left an enduring mark, kindling our passion for robotics and inspiring
            us to continuously explore the boundaries of technology."

          />
        </div>
        <div className="main">
          <BlogCard
            imageSrc={webdev}
            title="Web development workshop"
            date="Sun, 10 Sept 2023"
            venue="MANIT Bhopal"
            speakers=">SPEAKER'S -Arsh Goyal"
            description="I had the privilege of participating in a two-day Web Development workshop at MANIT Bhopal, and it was truly
            a remarkable experience. The highlight of the workshop was the enlightening sessions conducted by Mr. Amit
            Goyal. Amit's expertise and teaching style were outstanding, making complex web development concepts
            accessible and engaging.

            Throughout the workshop, I delved deep into essential topics like HTML, CSS, JavaScript, and more, gaining
            valuable insights and hands-on experience. Amit's passion for web development and his dedication to
            imparting knowledge left a lasting impression.

            These two days were transformative, significantly enhancing my web development skills and knowledge. I am
            immensely grateful to MANIT Bhopal for organizing this workshop and extend a special thank you to Amit Goyal
            for his exceptional guidance. 🚀💻"
          />
        </div>
        <div className="main">
          <BlogCard
            imageSrc={techhuntress}
            title="TechHuntressss Meetup"
            date="Sun 27 Aug 2023"
            venue="Indore"
            speakers="SPEAKER'S -Yash sehgal, Himanshu Ramchandani, Ankur Gupta and Sumit singh"
            description="Himanshu Ramchandani talked about the right mindset to learn for a software engineer, the
            concept of focused deep work, the power of learning in public and sharing your knowledge with an audience.

            Ankur Gupta provided a comprehensive guide on how to begin contributing to open source projects on GitHub,
            making it accessible for all tech enthusiasts.

            Lastly, Yash Sehgal discussed about the significance of personal branding during job hunting, highlighting
            its potential to set us apart in the competitive tech job market and connect with potential employers.

            Apart from the speakers' insights, we also saw some remarkable projects created by fellow attendees during
            techxchange. A big thank you to TechHunterssssfor organizing such an enriching event! Looking forward to the
            next one."
          />
        </div>
        <div className="main">
          <BlogCard
            imageSrc={bootcamp}
            title="TPG WEB3 Bootcamp"
            date="25-26 Aug 2023"
            venue="IES University Bhopal"
            speakers=">SPEAKER'S - Omika Dubey and Shouram Kumar"
            description="🌐Wrapped up an incredible two-day journey at the TPG Web3 Bootcamp hosted by IES University,
            Bhopal! 🚀

            The immersive sessions on Web3 technology, blockchain, and decentralized applications were mind-boggling. A
            huge shoutout to the amazing speakers who shared their expertise, enlightening us about the future of the
            digital world.

            But that's not all! 🎉 I'm thrilled to have been recognized for my active participation and awarded a super
            cool 'The Phoenix Guild' t-shirt. 🦅

            A big thank you to the organizers for this fantastic opportunity. Can't wait to explore the endless
            possibilities of Web3 and continue this exciting journey! 💡👕
            This event was first event which is organised in our college so a special thanks to all IESasian for making
            this event successful."
          />
        </div>
        <div className="main">
          <BlogCard
            imageSrc={w3bpl}
            title="W3Connect Bhopal"
            date="SUN, 2 JUL 2023"
            venue="Hotel vigya shree BHOPAL"
            speakers="SPEAKER'S - Mohit Jain, Ashutosh Jha, Jaskaran singh,Amit Sharma and Many more."
            description="Hello,
            Attended the incredible W3C #BhopalDAO event, and it was nothing short of amazing! 🎉 I had the opportunity
            to dive deep into the world of Web3 and learn fascinating things about its applications. 💡

            Started off with an insightful meetup, where Mohit Jain Sir gave a captivating talk about Web3 and shared
            valuable knowledge about Shardeum. 🌐

            Ashutosh Jha Sir also delivered a fantastic talk about WEB3 & The Graph company, shedding light on its
            significance in the Web3 landscape. 📈
            Overall, I feel immensely grateful to have been a part of this outstanding event. 🙌 It's events like these
            that make me truly passionate about the Web3 revolution and its limitless possibilities."
          />
        </div>
        <div className="main">
          <BlogCard
            imageSrc={fastn2}
            title="FASTN roadshow Ujjain"
            date="SAT, 1 JUL 2023"
            venue="Ujjain"
            speakers="SPEAKER'S - ayush soni"
            description="Hello,
            I'm delighted to share my experience attending my second FASTN programming language roadshow. Ayush Soni
            once again captivated the audience as the speaker, shedding light on FASTN's prowess, backed by its parent
            company Fifttry. The event highlighted FASTN's evolution since my last encounter, showcasing its versatility
            and advanced features. Notably, Amit Upadhyay, the Founder of FASTN, was acknowledged for his visionary
            leadership. His commitment to simplifying complex programming challenges through FASTN resonated strongly.
            This roadshow deepened my appreciation for FASTN's potential and renewed my enthusiasm to incorporate it
            into future projects."
          />
        </div>
        <div className="main">
          <BlogCard
            imageSrc={fastn3}
            title="FASTN roadshow Bhopal"
            date="SAT, 17 JUN 2023"
            venue="Codespace MP nagar BHOPAL"
            speakers="SPEAKER'S - ayush soni"
            description="Hello,
            I'm thrilled to share that I attended an enlightening FASTN programming language roadshow. Ayush Soni, the
            event's speaker, delved into the capabilities of FASTN, an innovative language backed by its parent company,
            Fifttry. The roadshow highlighted FASTN's simplicity and power, making it a standout choice for modern
            programming needs. An engaging session on building portfolios using FASTN left a lasting impression,
            showcasing its potential for efficient and creative project development. I'm excited to harness FASTN's
            capabilities for upcoming projects and explore the world of programming with renewed vigor."
          />
        </div>
        <div className="main">
          <BlogCard
            imageSrc={node}
            title="nodeJs workshope"
            date="SUN, 19 MARCH 2023"
            venue="DRMZ TECH MP nagar BHOPAL"
            speakers="SPEAKER'S - Nebendu Biswas, Khushi Trivedi"
            description="Hello geek,
            I wanted to share my excitement about attending a Node.js workshop where I learned to connect frontend and
            backend using MongoDB. The workshop covered Node.js fundamentals, Express.js for backend setup, and seamless
            integration with MongoDB. I gained hands-on experience in creating APIs, managing data with MongoDB, and
            ensuring real-time interaction. This knowledge has equipped me to build dynamic applications that bridge
            frontend and backend seamlessly. I'm eager to apply these skills and explore further possibilities. Looking
            forward to discussing more in detail."
          />
        </div>
        <div className="main">
          <BlogCard
            imageSrc={bplfoss}
            title="BHOPALFOSS"
            date="SUN, 5 MARCH 2023"
            venue="SISTec BHOPAL"
            speakers="SPEAKER'S - Mrinal Jain Nishant Mishra, Aishwarya Suresh, Lavakush Biyani, Epsit Bhardwaj,
            Gantavya Malviya and many other talented speakers"
            description="Hello geek,

            I had the opportunity to attend open source conference organized by Bhopal FOSS and it was an amazing
            experience! I got to learn from and network with other open source enthusiasts, and attend sessions on a
            wide range of topics, including open source software development, apache devlake ,using flutter for
            developing apps for adroid TV , OCR by tesseract , kubernetes , Gimp ML community building, and the impact
            of open source on society.
            I gained valuable insights about the latest trends and best practices in open source, and had the chance to
            connect with speakers and other attendees and learn from their experiences.."
          />
        </div>
        <div className="main">
          <BlogCard
            imageSrc={solona}
            title="Solana Developers India Tour"
            date="FRI, 18 NOV 2022"
            venue="UIT RGPV BHOPAL"
            speakers="SPEAKER'S - AYUSH CHOUHAN"
            description="Hello geek,

            This is my first web 3 event. I attended the Solana Developers India Tour and learned a lot about Solana and
            Blockchain using the basics of JavaScript and Rust. This event is the most interesting event of my life
            because it was the first tech event I've ever attended. Our speaker, Ayush Chouhan, spoke a lot about
            blockchain development and Solana. Basically, Solana is a blockchain platform that uses a proof-of-stake
            mechanism to provide smart contract functionality. Its native cryptocurrency is SOL. Solana was launched in
            2020 by Solana Labs, which was founded by Anatoly Yakovenko and Raj Gokal in 2018. In June 2021, Solana Labs
            sold $314 million worth of its native cryptocurrency, SOL, to a group of funds led by Andreessen Horowitz
            and Polychain Capital"
          />
        </div>
        
        {/* <div className="main">
          <BlogCard
            imageSrc={fastn3}
            title=""
            date=""
            venue=""
            speakers=""
            description=""
          />
        </div> */}
      </div>
    )
}
export default Blog();