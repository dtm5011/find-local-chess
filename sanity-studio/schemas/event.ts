export default {
  name: 'event',
  type: 'document',
  title: 'Event',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'dayOfWeek',
      type: 'string',
      title: 'Day of the Week',
      options: {
        list: [
          {title: 'Monday', value: 'Monday'},
          {title: 'Tuesday', value: 'Tuesday'},
          {title: 'Wednesday', value: 'Wednesday'},
          {title: 'Thursday', value: 'Thursday'},
          {title: 'Friday', value: 'Friday'},
          {title: 'Saturday', value: 'Saturday'},
          {title: 'Sunday', value: 'Sunday'},
        ],
      },
    },
    {
      name: 'recurrence',
      type: 'string',
      title: 'Recurrence',
      options: {
        list: [
          {title: 'Weekly', value: 'weekly'},
          {title: 'Bi-Weekly', value: 'bi-weekly'},
          {title: 'Monthly', value: 'monthly'},
          {title: 'First of the Month', value: 'first-of-month'},
          {title: 'Last of the Month', value: 'last-of-month'},
        ],
      },
    },
    {
      name: 'startTime',
      type: 'string',
      title: 'Start Time',
    },
    {
      name: 'endTime',
      type: 'string',
      title: 'End Time',
    },
    {
      name: 'venue',
      type: 'string',
      title: 'Venue',
    },
    {
      name: 'location',
      type: 'string',
      title: 'Location',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'organizer',
      type: 'string',
      title: 'Organizer',
    },
    {
      name: 'link',
      type: 'url',
      title: 'Link',
    },
    {
      name: 'contact',
      type: 'string',
      title: 'Contact',
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Tournament', value: 'tournament'},
          {title: 'Casual', value: 'casual'},
          {title: 'Blitz', value: 'blitz'},
          {title: 'Rapid', value: 'rapid'},
          {title: 'Classical', value: 'classical'},
          {title: 'Scholastic', value: 'scholastic'},
          {title: 'Online', value: 'online'},
        ],
      },
    },
    {
      name: 'status',
      type: 'string',
      title: 'Status',
      options: {
        list: [
          {title: 'Pending', value: 'pending'},
          {title: 'Approved', value: 'approved'},
          {title: 'Rejected', value: 'rejected'},
        ],
      },
      initialValue: 'pending',
    },
  ],
}