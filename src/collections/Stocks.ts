import { CollectionConfig } from 'payload/types';

const Stocks: CollectionConfig = {
  slug: 'stocks',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'marketValue',
      type: 'number',
    },
    {
      name: 'symbol',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'historicPrices',
      type: 'array',
      fields: [
        {
          name: 'date',
          type: 'date',
          required: true,
        },
        {
          name: 'price',
          type: 'number',
          required: true,
        },
      ],
    },
  ],
};

export default Stocks;