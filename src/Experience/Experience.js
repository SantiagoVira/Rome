import React from "react";
import "./Experience.css";
import Story from "./Story/Story";

import Pantheon from "../images/pantheon.jpg";
import Aqueduct from "../images/aqueduct.jpg";

function Experience() {
    return (
        <div className="ExperiencePageMain">
            <Story title="Public Works" src={Aqueduct} alt="Roman Aqueduct">
                Our most famous example of public works is, of course, the Pont
                du Gard. The Pont du Gard is one of the many aqueducts we
                constructed across our many territories. We may not be the first
                to create such structures, but we undoubtedly improved upon the
                idea. Our aqueducts are more structurally sound and they are all
                connected to a large and complex system spanning our entire
                republic. The aqueducts use gravity to their advantage,
                channeling freshwater towards cities. The aqueducts are also
                accompanied by bridges constructed from stone arches, often
                built to help the tubing across a river or a valley. These
                aqueducts are some of the most advanced in the world, and it
                takes a great deal of planning and intelligence to organize such
                a feat.
            </Story>
            <Story
                title="Art and Architecture"
                src={Pantheon}
                alt="Roman Pantheon"
            >
                Our architecture continued the legacy left by the Greeks. Our
                architects quickly adopted new building and construction
                techniques and invented new structures such as the amphitheater,
                the triumphal arch, the basilica, and many more. In addition to
                all of these structures, we began using new types of columns and
                were the first to incorporate them solely for decoration. We
                also grew famous for our use of marble, limestone, and concrete.
                Essentially, we know how to do architecture extremely well,
                further demonstrated by our most famous structures such as The
                Pont du Gard, The Pantheon, The Roman Forum, and of course The
                Colosseum.
            </Story>
        </div>
    );
}

export default Experience;
