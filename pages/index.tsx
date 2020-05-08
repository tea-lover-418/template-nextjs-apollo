import React from 'react';

import { OverviewScreen } from '../screens';
import { BaseLayout } from '../shared/base';

const OverviewPage = (): JSX.Element => {
    return (
        <BaseLayout> <OverviewScreen/></BaseLayout>
    );
}

export default OverviewPage;
