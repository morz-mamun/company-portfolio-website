import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { TTeamMember } from '@/types/team-card';
type TTeamMemberDetailsModal = {
  isOpen: boolean;
  closeModal: () => void;
  selectedMember: TTeamMember;
};

export default function TeamMemberDetailsModal({
  isOpen,
  closeModal,
  selectedMember,
}: TTeamMemberDetailsModal) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && closeModal()}>
      <DialogContent className="border-border/50 max-h-[90vh] w-full overflow-y-auto rounded-2xl border p-0 shadow-2xl md:max-w-2xl lg:!max-w-3xl">
        {/* Modal Header */}
        <DialogHeader className="border-border/50 relative border-b p-4 pb-6 md:p-8">
          <DialogTitle className="flex items-start gap-6">
            <img
              src={selectedMember.image || '/placeholder.svg'}
              onError={(e) => (e.currentTarget.src = '/placeholder.svg')}
              alt={selectedMember.name}
              className="border-primary/20 h-20 w-20 rounded-full border-4 object-cover md:h-24 md:w-24"
            />
            <div className="mt-4 text-start">
              <h3 className="mb-2 font-bold md:text-3xl">
                {selectedMember.name}
              </h3>
              <p className="text-primary text-sm font-medium md:text-lg">
                {selectedMember.title}
              </p>
            </div>
          </DialogTitle>
        </DialogHeader>

        {/* Modal Content */}
        <div className="space-y-4 p-4 md:space-y-6 md:p-8">
          {/* About */}
          <div>
            <h4 className="mb-3 text-base font-semibold md:text-lg">About</h4>
            <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
              {selectedMember.fullBio}
            </p>
          </div>

          {/* Experience */}
          <div>
            <h4 className="mb-3 text-base font-semibold md:text-lg">
              Experience
            </h4>
            <p className="text-muted-foreground text-sm md:text-base">
              {selectedMember.experience}
            </p>
          </div>

          {/* Skills */}
          <div>
            <h4 className="mb-3 text-base font-semibold md:text-lg">Skills</h4>
            <div className="flex flex-wrap gap-2">
              {selectedMember.skills.map((skill: string, index: number) => (
                <span
                  key={index}
                  className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h4 className="mb-3 text-base font-semibold md:text-lg">
              Education
            </h4>
            <p className="text-muted-foreground text-sm md:text-base">
              {selectedMember.education}
            </p>
          </div>

          {/* Achievements */}
          <div>
            <h4 className="mb-3 text-base font-semibold md:text-lg">
              Key Achievements
            </h4>
            <ul className="space-y-2">
              {selectedMember.achievements.map(
                (achievement: string, index: number) => (
                  <li
                    key={index}
                    className="text-muted-foreground flex items-start gap-2 text-sm md:text-base"
                  >
                    <span className="bg-primary mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full"></span>
                    {achievement}
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
