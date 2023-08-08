import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export type TabOption = {
  name: string;
  value: string;
  content: React.ReactNode;
};

interface ITabProps {
  defaultValue?: string;
  options: TabOption[];
}

export default function CustomTabs({ defaultValue, options }: ITabProps) {
  return (
    <Tabs defaultValue={defaultValue}>
      <TabsList className="flex w-full h-[67px] p-0 rounded-lg bg-secondary">
        {options.map((option, i) => (
          <TabsTrigger
            key={`tab-option-${i}`}
            className="flex-1 h-full rounded-lg text-black data-[state=active]:bg-black data-[state=active]:text-white"
            value={option.value}
          >
            {option.name}
          </TabsTrigger>
        ))}
      </TabsList>
      {options.map((option, i) => (
        <TabsContent key={`tab-content-${i}`} value={option.value}>
          {option.content}
        </TabsContent>
      ))}
    </Tabs>
  );
}
