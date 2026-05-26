"use client";

import Navbar from "@/components/layout/Navbar";
import Container from "@/components/layout/Container";
import FilterSidebar from "@/components/filters/FilterSidebar";
import InternshipHeader from "@/components/internships/InternshipHeader";
import InternshipList from "@/components/internships/InternshipList";
import EmptyState from "@/components/internships/EmptyState";
import Loader from "@/components/ui/Loader";

import { useInternships } from "@/hooks/useInternships";
import { useFilters } from "@/hooks/useFilters";

export default function HomePage() {
  const { internships, loading } = useInternships();

  const {
    profile,
    setProfile,
    location,
    setLocation,
    duration,
    setDuration,
    stipend,
    setStipend,
    filteredInternships,
  } = useFilters(internships);

  return (
    <main className="min-h-screen bg-[#f8f9fb]">
      <Navbar />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8 py-8">
          <FilterSidebar
            profile={profile}
            setProfile={setProfile}
            location={location}
            setLocation={setLocation}
            duration={duration}
            setDuration={setDuration}
            stipend={stipend}
            setStipend={setStipend}
          />

          <section>
            <InternshipHeader
              count={filteredInternships.length}
            />

            {loading ? (
              <Loader />
            ) : filteredInternships.length > 0 ? (
              <InternshipList
                internships={filteredInternships}
              />
            ) : (
              <EmptyState />
            )}
          </section>
        </div>
      </Container>
    </main>
  );
}