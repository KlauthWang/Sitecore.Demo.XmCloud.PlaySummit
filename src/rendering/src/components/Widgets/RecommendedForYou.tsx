import { RecommendationWidgetProps } from '@sitecore-discover/react';
import RecommendedProducts from './RecommendedProducts';

interface RecommendedForYouProps extends RecommendationWidgetProps {
  rfkId: string;
}

const RecommendedForYou = (props: RecommendedForYouProps): JSX.Element => (
  <RecommendedProducts {...props} title="Recommended for you" />
);

export default RecommendedForYou;
