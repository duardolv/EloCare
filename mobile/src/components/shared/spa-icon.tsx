import { Path } from 'react-native-svg';

import { createIcon } from '@/components/ui/icon';

// EloCare's brand mark — the Material Symbols "spa" glyph (outlined style,
// codepoint U+EB4C), traced from assets/elocare.svg. Unlike the lucide set
// used everywhere else, this is a filled glyph, not a stroke icon, so the
// path carries no fill/stroke of its own — createIcon resolves it to
// `currentColor`, the same `text-*` className mechanism as every other Icon.
export const SpaIcon = createIcon({
  viewBox: '0 -960 960 960',
  path: (
    <Path d="M480-80Q407-89 335-119.50Q263-150 206.50-207Q150-264 115-351Q80-438 80-560L80-600L120-600Q171-600 225-587Q279-574 326-548Q338-634 380.50-724.50Q423-815 480-880Q537-815 579.50-724.50Q622-634 634-548Q681-574 735-587Q789-600 840-600L880-600L880-560Q880-438 845-351Q810-264 753.50-207Q697-150 625.50-119.50Q554-89 480-80M478-162Q467-328 379.50-413Q292-498 162-518Q173-347 263.50-263Q354-179 478-162M480-416Q495-438 516.50-461.50Q538-485 558-502Q556-559 535.50-621Q515-683 480-742Q445-683 424.50-621Q404-559 402-502Q422-485 444-461.50Q466-438 480-416M558-180Q595-192 635-215Q675-238 709.50-277.50Q744-317 768.50-376Q793-435 798-518Q704-504 633-455.50Q562-407 524-332Q536-300 544.50-262Q553-224 558-180Z" />
  ),
});
