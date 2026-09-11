import Capabilities from "@/components/landing/Capabilities";
import CommandsGrid from "@/components/landing/CommandsGrid";
import ComparisonTable from "@/components/landing/ComparisonTable";
import DashboardPreview from "@/components/landing/DashboardPreview";
import FAQ from "@/components/landing/FAQ";
import FilesSection from "@/components/landing/FilesSection";
import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import InstallSection from "@/components/landing/InstallSection";
import Navbar from "@/components/landing/Navbar";
import Reveal from "@/components/shared/Reveal";
import ToolSupport from "@/components/landing/ToolSupport";
import WhyBuildFlow from "@/components/landing/WhyBuildFlow";
import WorkflowDiagram from "@/components/landing/WorkflowDiagram";
import WorkflowSteps from "@/components/landing/WorkflowSteps";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Reveal delay={100}><WorkflowDiagram /></Reveal>
        <Reveal delay={200}><InstallSection /></Reveal>
        <Reveal delay={300}><WorkflowSteps /></Reveal>
        <Reveal delay={400}><FilesSection /></Reveal>
        <Reveal delay={500}><ToolSupport /></Reveal>
        <Reveal delay={600}><DashboardPreview /></Reveal>
        <Reveal delay={700}><WhyBuildFlow /></Reveal>
        <Reveal delay={800}><CommandsGrid /></Reveal>
        <Reveal delay={900}><Capabilities /></Reveal>
        <Reveal delay={1000}><ComparisonTable /></Reveal>
        <Reveal delay={1100}><FAQ /></Reveal>
      </main>
      <Footer />
    </div>
  );
}