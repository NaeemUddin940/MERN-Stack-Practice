import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import ProductSection from "../Reusable/ProductSection";
function TabDemo() {
  return (
    <Tabs defaultValue="tab-1">
      <TabsList className="relative h-auto w-full gap-5  p-0 before:absolute before:inset-x-0 before:bottom-0 before:h-px before:bg-border">
        <TabsTrigger
          value="tab-1"
          className="overflow-hidden text-xl rounded-b-none border-x border-t border-border bg-muted md:py-4 data-[state=active]:z-10 data-[state=active]:shadow-none">
          New Arrival
        </TabsTrigger>
        <TabsTrigger
          value="tab-2"
          className="overflow-hidden text-xl rounded-b-none border-x border-t border-border bg-muted md:py-4 data-[state=active]:z-10 data-[state=active]:shadow-none">
          T-shirt
        </TabsTrigger>
        <TabsTrigger
          value="tab-3"
          className="overflow-hidden text-xl rounded-b-none border-x border-t border-border bg-muted md:py-4 data-[state=active]:z-10 data-[state=active]:shadow-none">
          Shirt
        </TabsTrigger>
        <TabsTrigger
          value="tab-4"
          className="overflow-hidden text-xl rounded-b-none border-x border-t border-border bg-muted md:py-4 data-[state=active]:z-10 data-[state=active]:shadow-none">
          Pants
        </TabsTrigger>
        <TabsTrigger
          value="tab-5"
          className="overflow-hidden text-xl rounded-b-none border-x border-t border-border bg-muted md:py-4 data-[state=active]:z-10 data-[state=active]:shadow-none">
          Shoes
        </TabsTrigger>
        <TabsTrigger
          value="tab-6"
          className="overflow-hidden text-xl rounded-b-none border-x border-t border-border bg-muted md:py-4 data-[state=active]:z-10 data-[state=active]:shadow-none">
          Watch
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab-1">
        <ProductSection
          title="New Arrival"
          filterFn={(product) => product.isNew === true}
        />
      </TabsContent>
      <TabsContent value="tab-2">
        <ProductSection
          title="T-shirt"
          filterFn={(product) => product.catagory === "t-shirt"}
        />
      </TabsContent>
      <TabsContent value="tab-3">
        <ProductSection
        title="Shirt"
        filterFn={(product) => product.catagory === "shirt"}
      />
      </TabsContent>
      <TabsContent value="tab-4">
        <ProductSection
        title="Pants"
        filterFn={(product) => product.catagory === "pant"}
      />
      </TabsContent>
      <TabsContent value="tab-5">
        <ProductSection
        title="Shoes"
        filterFn={(product) => product.catagory === "shoes"}
      />
      </TabsContent>
      <TabsContent value="tab-6">
        <ProductSection
        title="Watch"
        filterFn={(product) => product.catagory === "watch"}
      />
      </TabsContent>
    </Tabs>
  );
}

export { TabDemo };
