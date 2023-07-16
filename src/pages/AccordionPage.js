import Accordion from '../components/Accordion';

function AccordionPage() {
  const items = [
    {
      id: 'oweiuj98',
      label: 'React',
      content:
        'Lorem ipsum delorum. Lorem ipsum delorum. Lorem ipsum delorum. Lorem ipsum delorum.',
    },
    {
      id: 'ajlksi24',
      label: 'JavaScript',
      content: 'A bi blue joey. A bi blue joey. A bi blue joey.',
    },
    {
      id: 'zmoewe32',
      label: 'CSS',
      content:
        'Yer a wizard harry. Yer a wizard harry. Yer a wizard harry. Yer a wizard harry.',
    },
  ];

  return <Accordion items={items} />;
}

export default AccordionPage;
